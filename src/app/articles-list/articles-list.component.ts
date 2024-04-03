import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../common/article';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
// Modèle de donnée d'un article et initialisation du modèle de donnée
article: Article = {
  id: '',
  name: '',
  price: '',
  contact: '',
  stock: '',
};
// Liste des articles disponibles
articles!: Article[];


ngOnInit() {
  // Récupération des articles à partir du local storage
  this.articles = this.getFromLocalStorage();
}

//Création d'un nouvel article et ajout au tableau
createArticle(article: Article) {
  // Ajout de l'article à la liste des articles
  this.articles.push(article);
  localStorage.setItem('articles', JSON.stringify(this.articles));

  // Réinitialisation du modèle
  this.article = {
    id: '',
    name: '',
    price: '',
    contact: '',
    stock: '',
  };
}

// Suppression d'un article
deleteArticle(article: Article) {
  // Récupération de l'index de l'article à supprimer
  const index = this.articles.findIndex((x) => x.id === article.id);
  // Suppression de l'article du tableau
  this.articles.splice(index, 1);
  localStorage.setItem('articles', JSON.stringify(this.articles));
}

/**
 * Récupération du tableau d'articles stocké dans le local storage
 */
getFromLocalStorage(): Article[] {
  // Récupération des articles en format 'string'
  const stringData = localStorage.getItem('articles');
  // Conversion des données de type 'string' en objet Json
  const articles: Article[] = JSON.parse(stringData || '[]');

  return articles;
}
}

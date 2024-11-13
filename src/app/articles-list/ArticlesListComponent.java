import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {
  article: Article = {
    id: '',
    name: '',
    price: '',
    contact: '',
    stock: '',
  };

  articles!: Article[];

  // Injection du service dans le constructeur
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // Utilisation du service pour récupérer les articles
    this.articles = this.articleService.getArticles();
  }

  // Utilisation du service pour ajouter un article
  createArticle(article: Article) {
    this.articleService.addArticle(article);
    this.articles = this.articleService.getArticles(); // Actualise la liste des articles depuis le service

    // Réinitialisation du modèle
    this.article = {
      id: '',
      name: '',
      price: '',
      contact: '',
      stock: '',
    };
  }

  // Utilisation du service pour supprimer un article
  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article);
    this.articles = this.articleService.getArticles(); // Actualise la liste des articles depuis le service
  }
}

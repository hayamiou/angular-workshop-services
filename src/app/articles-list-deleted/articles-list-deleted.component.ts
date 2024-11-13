import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list-deleted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-list-deleted.component.html',
  styleUrls: ['./articles-list-deleted.component.css']
})
export class ArticlesListDeletedComponent implements OnInit {
  articlesDeleted!: Article[];

  // Injection du service dans le constructeur
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // Récupération des articles supprimés via le service
    this.articlesDeleted = this.articleService.getDeletedArticles();
  }

  /**
   * Restaure un article supprimé
   */
  restore(article: Article) {
    // Utilisation du service pour restaurer l'article
    this.articleService.restoreArticle(article);
    // Mise à jour de la liste des articles supprimés
    this.articlesDeleted = this.articleService.getDeletedArticles();
  }
}

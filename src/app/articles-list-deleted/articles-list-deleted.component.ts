import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article } from '../common/article';

@Component({
  selector: 'app-articles-list-deleted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-list-deleted.component.html',
  styleUrl: './articles-list-deleted.component.css'
})
export class ArticlesListDeletedComponent {
  // Liste des articles non disponnible
  articlesDeleted!: Article[];

  ngOnInit() {
    // TODO récupération des articles non disponible à partir d'un service
  }

  /**
   * Restaure un article supprimé
   */
  restore() {
    // TODO restauration de l'article à partir d'un service
  }
}

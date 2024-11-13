import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [];
  private deletedArticles: Article[] = []; // Stock des articles supprimés

  constructor() {
    this.articles = this.getFromLocalStorage('articles');
    this.deletedArticles = this.getFromLocalStorage('deletedArticles');
  }

  // Méthodes pour gérer les articles actifs
  getArticles(): Article[] {
    return this.articles;
  }

  addArticle(article: Article): void {
    this.articles.push(article);
    this.saveToLocalStorage('articles', this.articles);
  }

  deleteArticle(article: Article): void {
    const index = this.articles.findIndex((x) => x.id === article.id);
    if (index > -1) {
      const [deletedArticle] = this.articles.splice(index, 1);
      this.deletedArticles.push(deletedArticle); // Ajoute à la liste des articles supprimés
      this.saveToLocalStorage('articles', this.articles);
      this.saveToLocalStorage('deletedArticles', this.deletedArticles);
    }
  }

  // Méthodes pour gérer les articles supprimés
  getDeletedArticles(): Article[] {
    return this.deletedArticles;
  }

  restoreArticle(article: Article): void {
    const index = this.deletedArticles.findIndex((x) => x.id === article.id);
    if (index > -1) {
      const [restoredArticle] = this.deletedArticles.splice(index, 1);
      this.articles.push(restoredArticle); // Restaure dans la liste active
      this.saveToLocalStorage('articles', this.articles);
      this.saveToLocalStorage('deletedArticles', this.deletedArticles);
    }
  }

  // Méthode générique pour récupérer des données de localStorage
  private getFromLocalStorage(key: string): Article[] {
    const stringData = localStorage.getItem(key);
    return JSON.parse(stringData || '[]');
  }

  // Méthode générique pour sauvegarder des données dans localStorage
  private saveToLocalStorage(key: string, data: Article[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

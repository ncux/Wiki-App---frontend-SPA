import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ArticleInterface} from "./article-interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  serverUrl = 'http://127.0.0.1:3000/articles';
  articles: ArticleInterface[] = [];

  constructor(private http: HttpClient) { }


  getAllArticles() {
    return this.http.get(this.serverUrl);
  }


  getOneArticle(id) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }


  addArticle(title, content) {
    const article = { title: title, content: content };
    return this.http.post(`${this.serverUrl}/add`, article);
  }


  updateArticle(id, title, content) {
    const article = { title: title, content: content };
    return this.http.put(`${this.serverUrl}/update/${id}`, article);
  }


  deleteArticle(id) {
    return this.http.delete(`${this.serverUrl}/delete/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';

import { ArticleInterface } from '../../article-interface';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  filteredArticles: ArticleInterface[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getAllArticles().subscribe((articles: ArticleInterface[]) => {
      console.log(articles);
      this.articleService.articles = articles;
      this.articleService.articles = this.articleService.articles.reverse();
      this.filteredArticles = this.articleService.articles;
    });
  }

  filterArticles(query) {
    this.filteredArticles = query ?
      this.articleService.articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase())) :
      this.articleService.articles;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string;
  article: any = {};


  constructor(private articleService: ArticleService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id  = params.id);
    this.articleService.getOneArticle(this.id).subscribe(article => {
      console.log(article);
      this.article = article;
    });
  }

  editArticle(id) {
    this.router.navigate([`/articles/edit/${id}`]);
  }


  deleteArticle(id) {
    if (confirm('You are about to permanently remove this article. Continue?')) {
      this.articleService.deleteArticle(id).subscribe(() => {
        console.log('delete article');
      });
      this.articleService.articles = this.articleService.articles.filter(article => article.id !== id);
      this.router.navigate(['/articles']);
    }
  }

}

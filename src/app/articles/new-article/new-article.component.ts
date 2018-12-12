import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private articleService: ArticleService,
              private formBuilder: FormBuilder,
              private router: Router,
  ) {
    this.articleForm = formBuilder.group({ title: ['', Validators.required], content: ['', Validators.required] });
  }

  ngOnInit() {
  }

  addArticle(title, content) {
    console.log(title, content);
    this.articleService.addArticle(title, content).subscribe(() => this.articleForm.reset());
  }

  viewAllArticles() {
    this.router.navigate(['/articles']);
  }


}

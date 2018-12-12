import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  article: any = {};
  updateForm: FormGroup;

  constructor(private articleService: ArticleService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
    this.updateForm = formBuilder.group({title: ['', Validators.required], content: ['', Validators.required]});
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => this.id  = params.id);
      this.articleService.getOneArticle(this.id).subscribe(article => {
        this.article = article;
        this.updateForm.get('title').setValue(this.article.title);
        this.updateForm.get('content').setValue(this.article.content);
      });
  }


  updateArticle(title, content) {
    this.articleService.updateArticle(this.id, title, content).subscribe(() => {
      console.log('edited article')
    });
    this.updateForm.reset();
    this.router.navigate(['/articles']);
  }

}


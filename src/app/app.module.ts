import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './router.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-6-datatable';

import { ArticleService } from './article.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { ListComponent } from './articles/list/list.component';
import { DetailComponent } from './articles/detail/detail.component';
import { EditComponent } from './articles/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewArticleComponent,
    ListComponent,
    DetailComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTableModule,

  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

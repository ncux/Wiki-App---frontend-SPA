
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListComponent } from "./articles/list/list.component";
import { DetailComponent } from "./articles/detail/detail.component";
import { EditComponent } from "./articles/edit/edit.component";
import { NewArticleComponent } from './articles/new-article/new-article.component';



const routes: Routes = [
  { path: 'articles/detail/:id', component: DetailComponent },
  { path: 'articles/edit/:id', component: EditComponent },
  { path: 'articles/new', component: NewArticleComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'articles', component: ListComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class RoutingModule {

}

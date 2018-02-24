import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';
import { IssueComponent } from './issue/issue.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full'},
      { path: 'top', component: TopComponent },
      { path: 'issue', component: IssueComponent },
      { path: 'wiki', component: WikiComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

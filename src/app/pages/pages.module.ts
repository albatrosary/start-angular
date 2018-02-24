import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';
import { IssueComponent } from './issue/issue.component';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, TopComponent, IssueComponent, WikiComponent]
})
export class PagesModule { }

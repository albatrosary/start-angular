import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';
import { IssueComponent } from './issue/issue.component';
import { WikiComponent } from './wiki/wiki.component';
import { MarkdownPipe } from './wiki/markdown.pipe';

import { IssueService } from './issue/issue.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, TopComponent, IssueComponent, WikiComponent, MarkdownPipe],
  providers: [
    IssueService
  ]
})
export class PagesModule { }

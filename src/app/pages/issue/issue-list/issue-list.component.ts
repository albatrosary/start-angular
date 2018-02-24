import { Component, OnInit } from'@angular/core';

import { Issue } from'../issue';
import { IssueService } from'../issue.service';

@Component({
  selector: 'ah-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.sass']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];

  constructor (
    private issueService: IssueService
  ) {}

  public ngOnInit () {
    this.issues = this.issueService.list;
  }

  public onDelete(index: number): void {
    this.issueService.delete(index);
  }
  
}

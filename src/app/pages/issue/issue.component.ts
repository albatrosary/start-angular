import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from'./issue';
import { IssueService } from'./issue.service';

@Component({
  selector: 'ah-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.sass']
})
export class IssueComponent implements OnInit {

  issues: Issue[]

  constructor (
    private issueService: IssueService
  ) {}

  ngOnInit(): void {
    this.issueService.list
      .subscribe(response => this.issues = response)
  }
  
  onSubmit(issue: Issue) {
    this.issueService.add(issue);
    this.issues.push(issue);
  }

  public onDelete(index: number) {
    console.log('index', index)
    this.issueService.delete(index);
    this.issues.splice(index, 1);
  }
}

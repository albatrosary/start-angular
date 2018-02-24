import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';
import { IssueService } from './issue.service';

@Component({
  selector: 'ah-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.sass']
})
export class IssueComponent implements OnInit {

  issue: Issue;
  issues: Issue[];

  constructor (
    private issueService: IssueService
  ) {}

  ngOnInit(): void {
    this.issue = new Issue;
    this.issues = this.issueService.list;
  }

  public onSubmit(form: NgForm) {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }

    this.issueService.add(issue);

    form.reset();
  }

  public onDelete(index: number) {
    this.issueService.delete(index);
  }

}

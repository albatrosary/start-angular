import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';

@Component({
  selector: 'ah-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.sass']
})
export class IssueComponent implements OnInit {

  issue: Issue;
  issues: Issue[];

  constructor () {}

  ngOnInit(): void {
    this.issue = new Issue;
    this.issues= [];
  }

  public onSubmit(form: NgForm) {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }

    this.issues.push(issue);

    form.reset();
  }

  public onDelete(index: number) {
    this.issues.splice(index, 1);
  }

}

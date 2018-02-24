import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from '../issue';

@Component({
  selector: 'ah-issue-input',
  templateUrl: './issue-input.component.html',
  styleUrls: ['./issue-input.component.sass']
})
export class IssueInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Output("onSubmit")
  private _onSubmit = new EventEmitter<Issue>();
  public onSubmit(form: NgForm): void {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    };
    this._onSubmit.emit(issue);
    form.reset();
  }

}

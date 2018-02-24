import { Component, OnInit, Input, Output, EventEmitter } from'@angular/core';

import { Issue } from'../issue';

@Component({
  selector: 'ah-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.sass']
})
export class IssueListComponent implements OnInit {

  @Input() issues: Issue[];

  constructor (
  ) {}

  public ngOnInit () { }

  @Output('onDelete')
  private _onDelete = new EventEmitter<number>();
  public onDelete(index: number): void {
    this._onDelete.emit(index);
  }
  
}

import { Component, OnInit, Input, Output, EventEmitter } from'@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ah-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.sass']
})
export class IssueDetailComponent implements OnInit {

  @Input('rownum')
  rownum: number;

  @Input('title')
  title: string;

  @Input('desc')
  desc: string;

  @Output()
  private onDelete = new EventEmitter();
  public onClick($event: any): void {
    this.onDelete.emit($event);
  }

  public gotoUpdate(): void {
    this.router.navigate(['/pages/issue/update', this.rownum]);
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
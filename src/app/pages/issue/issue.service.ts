import { Injectable } from '@angular/core';

import { Issue } from './issue';

@Injectable()
export class IssueService {

  private issues: Issue[] = [];
  
  constructor() { }
 
  public delete(index: number): void {
    this.issues.splice(index, 1);
  }

  public add(issue: Issue): void {
    this.issues.push(issue);
  }

  public get list(): Issue[] {
    return this.issues;
  }
}

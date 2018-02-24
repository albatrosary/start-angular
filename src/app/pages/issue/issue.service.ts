import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Issue } from './issue';

@Injectable()
export class IssueService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private url = '/api/issues';

  constructor(private http: HttpClient) { }

  public delete(index: number) {
    console.log(`${this.url}/${index}`);
    this.http.delete(`${this.url}/${index}`)
     .toPromise();
  }

  public add(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.url, JSON.stringify(issue))
      .pipe(catchError(this.handleError));
  }

  public update(id: number, issue: Issue): void {
    let udata = {
      id: id,
      issue: JSON.stringify(issue)
    };

    this.http.put(this.url, udata)
      .toPromise()
      .catch(this.handleError);
  }

  public get list(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  public getIssue(id: number): Observable<Issue> {
    return this.http.get<Issue>(this.url + `/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
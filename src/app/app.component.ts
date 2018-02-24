import { Component } from '@angular/core';

import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'ah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ah';
  constructor(private router: Router) {
    this.router.events
      .filter(e => e instanceof NavigationStart)     
      .pairwise()
      .subscribe((e) => { console.log(e); }); 
   }
}

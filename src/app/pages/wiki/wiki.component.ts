import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ah-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.sass']
})
export class WikiComponent implements OnInit {
  
  wiki: string;

  constructor() { }

  ngOnInit() {
    this.wiki = localStorage.getItem('amke');
  }

}

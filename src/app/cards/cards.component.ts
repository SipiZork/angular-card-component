import { Component, OnInit } from '@angular/core';
import { Content } from '../contentTypes';
import { fakeContents } from '../fakeData';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  contents: Content[] = [];

  constructor() { }

  ngOnInit(): void {
    this.contents = fakeContents;
  }

}

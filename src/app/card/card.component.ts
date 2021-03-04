import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../contentTypes';
// import { Component } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  more = faEllipsisV;
  card = faIdCard;
  clock = far.faClock;
  python = fab.faPython;
  
  title: string = '';
  typesString: string = '';

  @Input() contents: Content = {
    title: '',
    code: '',
    types: [],
    date: '',
    time: '',
    img: ''
  };

  
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.contents);
  }

}

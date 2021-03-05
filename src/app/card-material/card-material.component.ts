import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../contentTypes';
// import { Component } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-card-material',
  templateUrl: './card-material.component.html',
  styleUrls: ['./card-material.component.scss']
})
export class CardMaterialComponent implements OnInit {
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
  }

}

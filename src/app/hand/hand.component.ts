import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() 
  cards: Array<String>;
  selected:string;
  constructor() { }

  ngOnInit() {
  }

  toggleSelect(card) {
    this.selected = card;
  }

}

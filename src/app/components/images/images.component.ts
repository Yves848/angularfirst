import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/Images';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      'visible' : (this.item.link !== '')
    }
    return classes;
  }

}

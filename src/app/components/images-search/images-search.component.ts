import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../search-service.service';

import { Item } from '../../models/Images';

@Component({
  selector: 'app-images-search',
  templateUrl: './images-search.component.html',
  styleUrls: ['./images-search.component.css']
})
export class ImagesSearchComponent implements OnInit {
  images: Item[];
  start: string;
  constructor(private searchService: SearchServiceService) {}

  ngOnInit() {
    this.images = [];
  }

  search(event) {
    console.log(event.start);
    this.searchService.search(event.image, Number(event.start)).subscribe(images => {
      this.images = [];
      images.forEach(item => {
        this.images.push(item);
      });
    });
  }
}

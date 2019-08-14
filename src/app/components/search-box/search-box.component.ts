import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { SearchServiceService } from '../../search-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchImage: EventEmitter<{image: string, start: string}> = new EventEmitter();

  image: string;
  start: string;

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit', this.start);
    this.searchImage.emit({image: this.image, start: this.start});
  }

}

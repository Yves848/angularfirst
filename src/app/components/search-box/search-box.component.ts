import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { SearchServiceService } from '../../search-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchImage: EventEmitter<any> = new EventEmitter();

  image: string;

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    this.searchImage.emit(this.image);
  }

}

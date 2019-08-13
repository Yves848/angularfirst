import { Component, OnInit } from "@angular/core";
import { SearchServiceService } from "../../search-service.service";

import { Image } from "../../models/Images";

@Component({
  selector: "app-images-search",
  templateUrl: "./images-search.component.html",
  styleUrls: ["./images-search.component.css"]
})
export class ImagesSearchComponent implements OnInit {
  images: Image[];

  constructor(private searchService: SearchServiceService) {}

  ngOnInit() {
    this.images = [];
  }

  search(image:string) {
this.searchService.search(image).subscribe(images => {
  this.images = [];
  images.forEach(image => {
    //console.log(image.url);
    this.images.push({url: image.url});
  })
})
  }
}

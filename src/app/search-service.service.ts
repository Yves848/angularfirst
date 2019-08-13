import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Image } from '../app/models/Images';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  CSE_API_KEY = '007439388879951561867:3ragl0fkhpm';
  CSE_ID = 'AIzaSyDYvQx76ZvFawwKOaDeGqRClb2RJlIcsXM';

  constructor(private http: HttpClient) {}

  search(key: string): Observable<Image[]> {
    let parameters: string = '?q=' + encodeURIComponent(key);
    parameters += '&cx=' + this.CSE_API_KEY;
    parameters += '&imgSize=large';
    parameters += '&searchType=image';
    parameters += '&key=' + this.CSE_ID;
    parameters += '&lr=lang_fr';
    parameters += '&start=1';
    let images:Image[] = [];
    const result = new Observable<Image[]>((observer) => {
      const path = 'https://www.googleapis.com/customsearch/v1' + parameters;
      this.http.get<any>(path).subscribe(res => {
        res.items.forEach(item => {
          images.push({
            url: item.link,
            width: item.image.width,
          height: item.image.height,
        title: item.title});
        });
        observer.next(images);
      });
    });

    return result;

  }

}

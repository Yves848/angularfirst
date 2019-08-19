import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase  } from '@angular/fire/database';

import { Item, SearchResult} from '../app/models/Images';
import { Plats, Plat} from '../app/models/Plats';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {


  constructor(private http: HttpClient) {}

  search(key: string, page: number): Observable<Item[]> {
    let parameters: string = '?q=' + encodeURIComponent(key);
    parameters += '&cx=' + environment.GoogleSearch.CSE_API_KEY;
    parameters += '&imgSize=large';
    parameters += '&searchType=image';
    parameters += '&key=' + environment.GoogleSearch.CSE_ID;
    parameters += '&lr=lang_fr';
    parameters += `&start=${page}`;
    const images: Item[] = [];
    const result = new Observable<Item[]>((observer) => {
      const path = 'https://www.googleapis.com/customsearch/v1' + parameters;
      this.http.get<SearchResult>(path).subscribe(res => {
        res.items.forEach(item => {
          images.push(item);
        });
        observer.next(images);
      });
    });

    return result;

  }



}

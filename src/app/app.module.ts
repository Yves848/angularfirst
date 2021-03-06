import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ImagesSearchComponent } from './components/images-search/images-search.component';
import { ImagesComponent } from './components/images/images.component';
import { environment } from '../environments/environment';
import { FirebaseComponent } from './components/firebase/firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ImagesSearchComponent,
    ImagesComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

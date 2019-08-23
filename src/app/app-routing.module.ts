import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirebaseComponent } from '../app/components/firebase/firebase.component';
import { ImagesSearchComponent } from '../app/components/images-search/images-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'plats', component: FirebaseComponent },
  { path: 'imageSearch', component: ImagesSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { PlatsServiceService } from '../../services/plats-service.service';
import { Subscription } from 'rxjs';
import { Plat } from '../../models/Plats';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  plats: Plat[];
  platsSubscription: Subscription;

  constructor(private platService: PlatsServiceService) {


  }


  ngOnInit() {
    this.platsSubscription = this.platService.platsSubject.subscribe(
      (plats: Plat[]) => {
        this.plats = plats;
      }
    );
    this.platService.emitPlats();
  }

}

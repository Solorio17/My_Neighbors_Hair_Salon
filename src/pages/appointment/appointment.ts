import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { StylistsPage } from "../stylists/stylists"


@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  constructor(public navCtrl: NavController) {
  }

  onLoadStylists(){
    this.navCtrl.push(StylistsPage)
  }
}

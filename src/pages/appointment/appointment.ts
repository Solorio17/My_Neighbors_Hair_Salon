import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { StylistsPage } from "../stylists/stylists"


@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  public date: String

  constructor(public navCtrl: NavController) {
    let aDate = new Date();
    aDate.setHours(aDate.getHours() - (aDate.getTimezoneOffset() / 60))
    this.date = aDate.toISOString();
  }

  onLoadStylists(){
    this.navCtrl.push(StylistsPage)
  }
}

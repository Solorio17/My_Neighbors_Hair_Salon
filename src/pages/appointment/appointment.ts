import { Component} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { StylistsPage } from "../stylists/stylists"


@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  public date: String

  constructor(public navCtrl: NavController, public modal: ModalController) {
    let aDate = new Date();
    aDate.setHours(aDate.getHours() - (aDate.getTimezoneOffset() / 60))
    this.date = aDate.toISOString();
  }

  stylistsModal(){
    const myModal = this.modal.create(StylistsPage)

    myModal.present();
  }



}

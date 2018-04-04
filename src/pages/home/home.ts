import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppointmentPage } from "../appointment/appointment";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  onLoadAppt(){
    this.navCtrl.push(AppointmentPage)
  }

}

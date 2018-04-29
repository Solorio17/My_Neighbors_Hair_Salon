import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StylistPage } from "./stylist/stylist";

@Component({
  selector: 'page-stylists',
  templateUrl: 'stylists.html',
})
export class StylistsPage {
  stylists = [
    {
      name: "Liz",
      age: 45
    },
    {
      name: "Ambour",
      age: 32
    },
    {
      name: "Savannah",
      age: 35
    },
    {
      name: "Sasha",
      age: 31
    },
    {
      name: "Azureya",
      age: 21
    },
    {
      name: "Joy",
      age: 40
    },
  ]

  constructor(public navCtrl: NavController) {
  }

  onLoadStylist(){
    this.navCtrl.push(StylistPage)
  }

}

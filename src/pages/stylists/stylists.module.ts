import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylistsPage } from './stylists';

@NgModule({
  declarations: [
    StylistsPage,
  ],
  imports: [
    IonicPageModule.forChild(StylistsPage),
  ],
})
export class StylistsPageModule {}

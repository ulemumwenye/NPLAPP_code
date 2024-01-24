import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EpaperPage } from './epaper.page';
import { EpaperPageRoutingModule } from './epaper-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpaperPageRoutingModule
  ],
  declarations: [EpaperPage],
})
export class EpaperPageModule {}

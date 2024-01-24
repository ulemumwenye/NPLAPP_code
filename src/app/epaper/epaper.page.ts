import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-epaper',
  templateUrl: './epaper.page.html',
  styleUrls: ['./epaper.page.scss'],
})
export class EpaperPage {

  ionViewDidEnter() {
    this.openEpaperUrl();
  }

  async openEpaperUrl() {
    const url = 'https://mwnation.com/epaper/membership/login';

    // Open the URL using Capacitor's Browser plugin
    await Browser.open({ url });
  }
}

import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-web1',
  templateUrl: './web1.page.html',
  styleUrls: ['./web1.page.scss'],
})
export class Web1Page {

  constructor(private inAppBrowser: InAppBrowser) {}

  ionViewDidEnter() {
    // This method will be called when the 'web1' page is entered
    this.openInAppBrowser();
  }

  openInAppBrowser() {
    const url = 'https://mwnation.com';

    // Check if the app is running on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile && this.inAppBrowser) {
      // Use InAppBrowser for mobile devices
      const options: InAppBrowserOptions = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };
      const browser = this.inAppBrowser.create(url, '_blank', options);
    } else {
      // Fallback to window.open for web browsers
      window.open(url, '_blank');
    }
  }
}

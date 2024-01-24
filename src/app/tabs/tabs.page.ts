import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'; // Import InAppBrowser

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router, private inAppBrowser: InAppBrowser) {}

  ionTabsDidChange(tab: any) {
    console.log('ionTabsDidChange called with tab:', tab);

    if (tab.tab === 'web1') {
      console.log('Opening InAppBrowser');
      this.openInAppBrowser();
    }
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router, private inAppBrowser: InAppBrowser) {}

  ionTabsDidChange(tab: any) {
    console.log('ionTabsDidChange called with tab:', tab);

    // Check the selected tab and navigate accordingly
    if (tab.tab === 'contact') {
      console.log('Navigating to Contact Page');
      this.router.navigate(['/contact']);
    } else if (tab.tab === 'epaper') {
      console.log('Opening Epaper InAppBrowser');
      this.openInAppBrowser('https://mwnation.com/epaper/membership/login');
    } else if (tab.tab === 'web1') {
      console.log('Opening Web1 InAppBrowser');
      this.openInAppBrowser('https://mwnation.com');
    } else if (tab.tab === 'settings') {
      console.log('Open Settings Page or Logic');
      // Call your openSettings logic here
    }
  }

  openInAppBrowser(url: string) {
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

  openSettings() {
    // Define the logic for opening settings
    console.log('Open settings logic here');
  }
}

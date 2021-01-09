import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate = [
      {
        title : 'Account Profil',
        url   : './tabs/tab1/tab1.page.html',
        icon  : 'person-circle-outline'
        },
      {
        title : 'Order History',
        url   : './tabs/tab2/tab2.page.ts',
        icon  : 'basket'
      },
      {
        title : 'Settings',
        url   : '',
        icon  : 'settings'
      },
      {
        title : 'LogOut',
        url   : '',
        icon  : 'log-out-outline'
      }
    ];
  }
}

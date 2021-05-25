import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackButtonService } from './services/back-button.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private backButtonService: BackButtonService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //   this.statusBar.styleDefault();
      //   this.splashScreen.hide();
      this.backButtonService.init();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
const { App } = Plugins;

@Component({
  selector: 'app-skip',
  templateUrl: './skip.page.html',
  styleUrls: ['./skip.page.scss'],
})
export class SkipPage implements OnInit {
  backButtonSubscription;
  subscription
  // for storing the returned subscription

  constructor(private platform: Platform, private routerOutlet: IonRouterOutlet) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  ngOnInit() {
  }
  // ionViewDidEnter() {
  //   this.subscription = this.platform.backButton.subscribe(() => { navigator['app'].exitApp(); });
  // }
  // ionViewWillLeave() {
  //   this.subscription.unsubscribe();
  // }
  // ngAfterViewInit() {
  //   this.backButtonSubscription = this.platform.backButton.subscribe(() => {
  //     navigator['app'].exitApp();
  //   });
  // }
  // ionViewDidEnter() {
  //   this.subscription = this.platform.backButton.subscribe(() => {
  //     navigator['app'].exitApp();
  //   });
  // }

  // ionViewWillLeave() {
  //   this.subscription.unsubscribe();
  // }

}

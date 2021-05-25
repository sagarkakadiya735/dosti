import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BackButtonService {
  private lastTimeBackButtonWasPressed = 0;
  private timePeriodToAction = 2000;

  init() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentUrl = this.router.url;
      if (currentUrl === "/tab1/tab1") {
        // this.withAlert("Do you really want to exit?", () => {
        //   navigator['app'].exitApp();
        // })
        this.withDoublePress("Press again to exit", () => {
          navigator['app'].exitApp();
        })
      } else {
        this.navControlelr.back();
      }

    });
  }

  async withDoublePress(message: string, action: () => void) {
    const currentTime = new Date().getTime();

    if (currentTime - this.lastTimeBackButtonWasPressed < this.timePeriodToAction) {
      action();
    } else {
      const toast = await this.toastController.create({
        message: message,
        duration: this.timePeriodToAction
      });

      await toast.present();

      this.lastTimeBackButtonWasPressed = currentTime;
    }
  }

  async withAlert(message: string, action: () => void) {
    const alert = await this.alertController.create({
      message: message,
      buttons: [{
        text: "Cancel",
        role: "cancel"
      },
      {
        text: "OK",
        handler: action
      }]
    });

    await alert.present();
  }

  constructor(private platform: Platform,
    private router: Router,
    private navControlelr: NavController,
    private alertController: AlertController,
    private toastController: ToastController) { }
}

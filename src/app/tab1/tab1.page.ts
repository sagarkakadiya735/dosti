import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController, IonRouterOutlet, NavController, Platform, ToastController } from '@ionic/angular';
// const { App } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // private lastTimeBackButtonWasPressed = 0;
  // private timePeriodToAction = 3000;
  product = [
    { id: '1', name: 'Embroidery Machine', img: '../../assets/01.jpg' },
    { id: '2', name: 'Sequin Head', img: '../../assets/02.jpg' },
    { id: '3', name: 'Cording Device', img: '../../assets/03.jpg' },
    { id: '4', name: 'Hot Fix Machine', img: '../../assets/04.jpg' },
    { id: '5', name: 'Digital Printing Machine', img: '../../assets/05.jpg' },
    { id: '6', name: 'Air Compressor', img: '../../assets/06.jpg' },
    { id: '7', name: 'Moti Machine', img: '../../assets/01.jpg' },
    { id: '8', name: 'Single Head Sewing Machine', img: '../../assets/02.jpg' },
    { id: '9', name: 'Spare Parts', img: '../../assets/03.jpg' },
    { id: '10', name: 'All Material', img: '../../assets/04.jpg' },
  ]
  productlist = [
    { id: '1', name: 'Embroidery Machine', img: '../../assets/b1.jpg' },
    { id: '2', name: 'Sequin Head', img: '../../assets/head02.jpg' },
    { id: '3', name: 'Cording Device', img: '../../assets/khatli-device-874.jpg' },
    { id: '4', name: 'Hot Fix Machine', img: '../../assets/hotfix.jpg' },
    { id: '5', name: 'Digital Printing Machine', img: '../../assets/printing-machine.jpg' },
    { id: '6', name: 'Air Compressor', img: '../../assets/air.jpg' },
    { id: '7', name: 'Moti Machine', img: '../../assets/moti.jpeg' },
    { id: '8', name: 'Single Head Sewing Machine', img: '../../assets/sewing.png' },
    { id: '9', name: 'Spare Parts', img: '../../assets/spare-parts.jpg' },
    { id: '10', name: 'All Material', img: '../../assets/material.jpg' },
  ]
  constructor(private router: Router, private toastController: ToastController, private alertController: AlertController, private navController: NavController, private platform: Platform, private routerOutlet: IonRouterOutlet) { }
  // init() {
  //   this.platform.backButton.subscribeWithPriority(10, async () => {
  //     const currentUrl = this.router.url;
  //     if (currentUrl === "/tab1") {
  //       // this.withAlert("Do you really want to exit?", () => {
  //       //   navigator['app'].exitApp();
  //       // })
  //       this.withDoublePress("Press again to exit from tab1", () => {
  //         navigator['app'].exitApp();
  //       })
  //     } else {
  //       this.navController.back();
  //     }

  //   });
  // }
  // async withDoublePress(message: string, action: () => void) {
  //   const currentTime = new Date().getTime();

  //   if (currentTime - this.lastTimeBackButtonWasPressed < this.timePeriodToAction) {
  //     action();
  //   } else {
  //     const toast = await this.toastController.create({
  //       message: message,
  //       duration: this.timePeriodToAction
  //     });

  //     await toast.present();

  //     this.lastTimeBackButtonWasPressed = currentTime;
  //   }
  // }
  // async withAlert(message: string, action: () => void) {
  //   const alert = await this.alertController.create({
  //     message: message,
  //     buttons: [{
  //       text: "Cancel",
  //       role: "cancel"
  //     },
  //     {
  //       text: "OK",
  //       handler: action
  //     }]
  //   });

  //   await alert.present();
  // }
  ProductId(id) {
    if (id == '1') {
      this.router.navigateByUrl('/embroidery/' + id)
    }
    else {
      this.router.navigateByUrl('/embroiderylist/' + id)
    }
  }
  onInit() {
  }

  condition = true;
  heart(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.condition = !this.condition;
    console.log(this.condition, "this");

  }
}

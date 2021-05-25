import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
  constructor(private router: Router, public alertController: AlertController) { }
  onInit() {

  }
  Edit(event, id) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.router.navigateByUrl('/editproduct/' + id)
  }
  // Delete(event, id) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   event.stopImmediatePropagation();
  //   this.router.navigateByUrl('/editproduct/' + id)
  // }
  async Delete(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async Logout(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>Logout</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}

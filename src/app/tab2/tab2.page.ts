import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { AddproductPage } from '../addproduct/addproduct.page';
import { AddproductPageRoutingModule } from '../addproduct/addproduct-routing.module';
const { App } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, public navController: NavController, private platform: Platform, private routerOutlet: IonRouterOutlet) {

    // this.platform.backButton.subscribeWithPriority(1, () => {
    //   alert('/tab1 hello.......')
    //   this.router.navigateByUrl('/tab1');
    // });

  }


  product = [
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
  Product(id) {
    // this.router.navigateByUrl('/addproduct/' + id)
    // if (id == 1)
    //   // dayrek badh back button
    //   this.navController.navigateRoot('/addproduct/' + id);
    // if (id == 2)
    //   // back ny jay application bdh ny thay
    //   this.navController.navigateForward('/addproduct/' + id);
    // if (id == 3)
    //   // dayrek badh back button
    //   this.navController.navigateBack('/addproduct/' + id);
    // if (id == 4)
    //   // kay ny thay
    //   this.navController.consumeTransition();
    // if (id == 5)
    //   // last page pr avi jse jyathi chalu kru tya
    //   this.navController.pop();
    // if (id == 6)
    //   // back jay
    //   this.navController.back();
    // if (id == 7)
    //   this.router.navigate(['/addproduct/' + id]);
    // if (id == 8)
    //   this.router.navigateByUrl('/addproduct/' + id)
    // // if (id == 9)
    // // if (id == 10)
  }
}

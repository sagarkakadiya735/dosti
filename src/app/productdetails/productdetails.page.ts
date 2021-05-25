import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    // zoom: false,
    // slidesPerView: 1.5,
    // spaceBetween: 20,
    // centeredSlides: true
  };
  productlist = [
    { id: '1', name: 'Embroidery', img: '../../assets/01.jpg' },
    { id: '2', name: 'Sequin Head', img: '../../assets/02.jpg' },
    { id: '3', name: 'Cording Device', img: '../../assets/03.jpg' },
    { id: '4', name: 'Hot Fix', img: '../../assets/04.jpg' },
    { id: '5', name: 'Digital Printing', img: '../../assets/05.jpg' },
  ]
  localid
  ngOnInit() {
    this.localid = localStorage.getItem('category_id');
  }

  presentAlert() {
    this.alertCtrl.create({
      header: 'Phone' + '9913087513',
      subHeader: 'Abress:' + 'B113 ishware krupa laxmanger kapodra polication station',
      message: 'Name:' + 'Sagar kakadiya',

      buttons: ['OK']
    }).then(res => {
      console.log("hello");

      res.present();

    });
  }

}

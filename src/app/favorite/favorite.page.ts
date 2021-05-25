import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor() { }
  productlist = [
    { id: '1', name: 'Embroidery', img: '../../assets/images.jpg' },
    { id: '2', name: 'Sequin Head', img: '../../assets/head02.jpg' },
    { id: '3', name: 'Cording Device', img: '../../assets/khatli-device-874.jpg' },
    { id: '4', name: 'Hot Fix', img: '../../assets/unnamed.jpg' },
    { id: '5', name: 'Digital Printing', img: '../../assets/khatli-device-874.jpg' },
    { id: '6', name: 'Air Compressor', img: '../../assets/air.jpg' },
    { id: '7', name: 'Moti', img: '../../assets/moti.jpeg' },
    { id: '8', name: 'Single Head', img: '../../assets/head.webp' },
    { id: '9', name: 'Spare Parts', img: '../../assets/spare-parts.jpg' },
    { id: '10', name: 'All Material', img: '../../assets/material.jpg' },
  ]
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-embroiderylist',
  templateUrl: './embroiderylist.page.html',
  styleUrls: ['./embroiderylist.page.scss'],
})
export class EmbroiderylistPage implements OnInit {
  id: any;
  condition = true
  constructor(private route: ActivatedRoute) { }
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
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id, "this.id");
  }
  heart(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.condition = !this.condition;
    console.log(this.condition, "this");
  }
  setId() {
    localStorage.setItem('category_id', this.id);

  }
}

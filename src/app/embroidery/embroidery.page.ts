import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embroidery',
  templateUrl: './embroidery.page.html',
  styleUrls: ['./embroidery.page.scss'],
})
export class EmbroideryPage implements OnInit {

  constructor() { }
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
  ngOnInit() {
  }
  embroiderylist(id, s_id) {
    localStorage.setItem('area', id);
    localStorage.setItem('category_id', s_id);
  }
}

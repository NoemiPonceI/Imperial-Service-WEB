import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 itemsServices = [
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Traslados aeropuerto —> hotel —> aeropuerto.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Alojamiento en hoteles con habitaciones dobles con baño o ducha.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Media pensión de 2 cenas en Salerno.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Transporte de autocar climatizado según ruta indicada.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Guía acompañante de habla hispana durante todo el recorrido por Italia.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Seguro de protección y asistencia en viaje MO Fullviajes.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Almuerzos en: Lago de Garda, Venecia, Roma, Capri, Pompeya.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Recorrido en el Vaticano, su museo y capilla Sixtina.'
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Visita a Pompeya.'
    }
  ];
  services= [
    {
      "title": "Imperial Service Tours",
      "description": "Explore the world with our luxury tour packages tailored to your needs.",
      "img": "https://example.com/tours.jpg"
    },
    {
      "title": "Imperial Service Cargo",
      "description": "Efficient and reliable cargo transportation services to deliver your goods worldwide.",
      "img": "https://example.com/cargo.jpg"
    },
    {
      "title": "Imperial Service Money",
      "description": "Secure and convenient money transfer services for your financial needs.",
      "img": "https://example.com/money.jpg"
    }
  ]
  
  constructor() { }

  ngOnInit() {
    
  }

}

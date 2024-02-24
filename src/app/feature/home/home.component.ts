import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModalComponent } from 'src/app/shared/components/service-modal/service-modal.component';

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
      "description": "Venta de pasaejs aéreos",
      "img": "../../../assets/images/tours.jpeg"
    },
    {
      "title": "Imperial Service Cargo",
      "description": "Servici de puerta a puerta, paqueteria de service a todo el Perú",
      "img": "../../../assets/images/cargo.jpeg"
    },
    {
      "title": "Imperial Service Money",
      "description": "Envios en dolares, euros y soles. Envios de documentos urgentes, invito familar,etc.",
      "img": "../../../assets/images/money.jpeg"
    }
  ]
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }
  showDetail(){
    const dialogRef = this.dialog.open(ServiceModalComponent, {
      height: 'auto',
      width: '40rem',
      data: {name: 'this.name', animal:' this.anima'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModalComponent } from 'src/app/shared/components/service-modal/service-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemsServices = [
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Traslados aeropuerto —> hotel —> aeropuerto.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description:
        'Alojamiento en hoteles con habitaciones dobles con baño o ducha.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Media pensión de 2 cenas en Salerno.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Transporte de autocar climatizado según ruta indicada.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description:
        'Guía acompañante de habla hispana durante todo el recorrido por Italia.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Seguro de protección y asistencia en viaje MO Fullviajes.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description:
        'Almuerzos en: Lago de Garda, Venecia, Roma, Capri, Pompeya.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Recorrido en el Vaticano, su museo y capilla Sixtina.',
    },
    {
      img: '../../../assets/images/nosotros-asesoria.png',
      description: 'Visita a Pompeya.',
    },
  ];
  services = [
    {
      title: 'Imperial Service Tours',
      description:
        'N1 en venta de pasajes aéreos ofreciendote, seguridad, rapidez y garantía.',
      img: '../../../assets/images/tours.jpeg',
      detailImg: [
        'https://img.freepik.com/foto-gratis/toma-aerea-hermosa-aldea-montana-capturada-machu-picchu-peru_181624-14674.jpg',
        'https://img.freepik.com/foto-gratis/ya-esta-todo-listo-sus-vacaciones-representante-ventas-entregando-pasaportes-boletos-avion-mujer-hombre-jovenes-su-viaje-vacaciones-agencia-viajes_662251-2215.jpg',
        'https://img.freepik.com/foto-gratis/ave-america-sur-habitat-natural_475641-744.jpg?t=st=1708739166~exp=1708742766~hmac=cfb504f8047d5f26fa796738ac969f155e24bc44609cef2ca5639f0f146968a6&w=2000',
      ],
    },
    {
      title: 'Imperial Service Cargo',
      description:
        'Encargados de paquetería service a todo el peru, nuestro servicio de puerta a puerta y retiros en todo Italia',
      img: '../../../assets/images/cargo.jpeg',
      detailImg: [
        '../../../assets/images/cargo-01.jpeg',
        '../../../assets/images/cargo-02.jpeg',
        'https://img.freepik.com/foto-gratis/logistica-transporte-buques-carga-contenedores-aviones-carga-puente-grua-funcionamiento-astillero-al-amanecer-antecedentes-logisticos-industria-importacion-exportacion-transporte-ai-generativo_123827-24177.jpg',
        'https://img.freepik.com/foto-gratis/hombre-equipo-seguridad-trabajo_23-2148976348.jpg',
        'https://img.freepik.com/foto-gratis/mensajero-afroamericano-femenino-preparandose-entrega-comprobando-lista-paquetes-furgoneta-reparto_637285-2136.jpg?w=2000&t=st=1708738780~exp=1708739380~hmac=4c8fa8b0f1125c52701e49ae06a5ae6396b93fd241af6b8656abfeaa9f4f33ee',
      ],
    },
    {
      title: 'Imperial Service Money',
      description:
        'Envios en dólares, euros y soles, ofreciendote una variedad de opciones de acuerdo a lo que solicites',
      img: '../../../assets/images/money.jpeg',
      detailImg: [
        'https://img.freepik.com/foto-gratis/dinero-rico-efectivo-antiguo-anonimo_1150-1656.jpg?t=st=1708739293~exp=1708742893~hmac=352c0e0f8dccec45d7afcbed2f15190618483cfbff59b36f37b185f81f325552&w=2000',
        'https://img.freepik.com/foto-gratis/manos-abriendo-sobre-lleno-billetes_176474-7125.jpg?t=st=1708739402~exp=1708743002~hmac=f7db2cd6571e331331df8970831a7bc9004280476912ab6b8f508977feebd58e&w=2000',
        'https://img.freepik.com/vector-gratis/diseno-plano-contra-reembolso_23-2148808657.jpg?t=st=1708739355~exp=1708742955~hmac=c92456a14da3e94f6c434d1775be63bbc7d1f86b5762511613bf556fac5bece8&w=1380',
        'https://img.freepik.com/vector-gratis/concepto-financiacion_24877-50812.jpg?t=st=1708739518~exp=1708743118~hmac=468ced535d71a774f7768f4712742341f0efdb1e89c4d8927b5090e483565a98&w=1380',
      ],
    },
  ]; constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // Method to open a dialog showing service details
  showDetail(detail: any) {
    // Open the dialog
    const dialogRef = this.dialog.open(ServiceModalComponent, {
      height: 'auto', // Set dialog height to auto
      width: '40rem', // Set dialog width to 40rem
      data: detail, // Pass detail data to the dialog
    });

    // Subscribe to dialog close event
    dialogRef.afterClosed().subscribe((result) => {
      // Log the result when the dialog is closed
      console.log('The dialog was closed', result);
    });
  }
}
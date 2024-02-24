import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit {
  @Input() srcUrl: any;
  constructor() {}

  ngOnInit() {
    console.warn(this.srcUrl);
    
  }
}

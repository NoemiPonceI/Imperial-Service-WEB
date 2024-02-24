import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
  pictures = [
    'https://images.unsplash.com/photo-1551198297-e490636298ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1542742518-7ad6e6b91bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80',
    'https://images.unsplash.com/photo-1456014673271-90b7fddf2eea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1551025119-77673c1d37cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  
  ];
  
  currentPicture = 0;
  
  
  constructor(public dialogRef: MatDialogRef<ServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: 'DialogData',) { }

  ngOnInit() {
  }
  openDialog(): void {
    this.dialogRef.close();
  }


select(index:number) {
 this.currentPicture = index;
}

selectArrow() {
 if (this.currentPicture < this.pictures.length - 1) {
   this.currentPicture++;
 }
}

selectLeftArrow() {
 if (this.currentPicture > 0) {
   this.currentPicture--;
 }
}
}

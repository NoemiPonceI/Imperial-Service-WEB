import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
  pictures: string[]; // Array to store pictures
  currentPicture = 0; // Index of currently selected picture

  constructor(
    public dialogRef: MatDialogRef<ServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Injecting data passed to the dialog
  ) { 
    this.pictures = this.data; // Initializing pictures with data passed to the dialog
  }

  ngOnInit() {
    this.pictures = this.data; // Initializing pictures with data passed to the dialog
  }

  // Close the dialog
  openDialog(): void {
    this.dialogRef.close();
  }

  // Select a picture by index
  select(index: number) {
    this.currentPicture = index;
  }

  // Move to the next picture
  selectArrow() {
    if (this.currentPicture < this.pictures.length - 1) {
      this.currentPicture++;
    }
  }

  // Move to the previous picture
  selectLeftArrow() {
    if (this.currentPicture > 0) {
      this.currentPicture--;
    }
  }
}

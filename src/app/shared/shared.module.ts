import { CommonModule, registerLocaleData } from "@angular/common";
import localeEspE from '@angular/common/locales/es-PE';
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { ServiceModalComponent } from "./components/service-modal/service-modal.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { GaleryComponent } from "./components/galery/galery.component";
registerLocaleData(localeEspE, 'es-PE');

const MODULES = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ServiceModalComponent,
  PreviewComponent,
  GaleryComponent
]



@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [...MODULES,CommonModule],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ],
})
export class SharedModule { }

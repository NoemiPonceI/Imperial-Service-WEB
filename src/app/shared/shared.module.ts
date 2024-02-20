import { registerLocaleData } from "@angular/common";
import localeEspE from '@angular/common/locales/es-PE';
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
registerLocaleData(localeEspE, 'es-PE');

const MODULES = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent
]



@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ],
})
export class SharedModule { }

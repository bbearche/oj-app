import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { FormErrorsComponent } from './form-errors.component';


export const appComponents = [
  FormErrorsComponent,
];

@NgModule({
  declarations: appComponents,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: appComponents
})
export class AppComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMovimientoPageRoutingModule } from './form-movimiento-routing.module';
import { PipesModule } from '../../pipes/pipes.module';

import { FormMovimientoPage } from './form-movimiento.page';
import { ModalBuscarClientePage } from '../modal-buscar-cliente/modal-buscar-cliente.page';
import { ModalBuscarClientePageModule } from '../modal-buscar-cliente/modal-buscar-cliente.module';

@NgModule({
  entryComponents: [
  	ModalBuscarClientePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMovimientoPageRoutingModule,
    PipesModule,
    ModalBuscarClientePageModule
  ],
  declarations: [FormMovimientoPage]
})
export class FormMovimientoPageModule {}

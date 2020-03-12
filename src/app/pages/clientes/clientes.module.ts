import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ModalAbmClientePageModule } from '../modal-abm-cliente/modal-abm-cliente.module';
import { ModalAbmClientePage } from '../modal-abm-cliente/modal-abm-cliente.page';

@NgModule({
  entryComponents:[
  	ModalAbmClientePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    PipesModule,
	ModalAbmClientePageModule
  ],
  declarations: [ClientesPage]
})
export class ClientesPageModule {}

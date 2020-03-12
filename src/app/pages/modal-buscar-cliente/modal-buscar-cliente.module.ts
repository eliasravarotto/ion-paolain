import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalBuscarClientePage } from './modal-buscar-cliente.page';

//import { ModalBuscarClientePageRoutingModule } from './modal-buscar-cliente-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ModalBuscarClientePageRoutingModule
  ],
  declarations: [ModalBuscarClientePage]
})
export class ModalBuscarClientePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalAbmClientePage } from './modal-abm-cliente.page';

//import { ModalAbmClientePageRoutingModule } from './modal-abm-cliente-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ModalAbmClientePageRoutingModule
  ],
  declarations: [ModalAbmClientePage]
})
export class ModalAbmClientePageModule {}

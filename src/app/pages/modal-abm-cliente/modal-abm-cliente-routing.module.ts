import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAbmClientePage } from './modal-abm-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAbmClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAbmClientePageRoutingModule {}

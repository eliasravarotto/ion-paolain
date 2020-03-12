import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CajaStatusComponent } from './caja-status/caja-status.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { UltimosMovimientosComponent } from './ultimos-movimientos/ultimos-movimientos.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  	HeaderComponent,
    CajaStatusComponent,
    MenuComponent,
    UltimosMovimientosComponent
  ],
  exports: [
  	HeaderComponent,
    CajaStatusComponent,
    MenuComponent,
    UltimosMovimientosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }

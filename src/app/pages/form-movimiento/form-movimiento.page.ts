import { Component, OnInit } from '@angular/core';
import { PaolainService } from '../../services/paolain.service';
import { Cliente } from '../../Interfaces/interfaces';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalBuscarClientePage } from '../modal-buscar-cliente/modal-buscar-cliente.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-movimiento',
  templateUrl: './form-movimiento.page.html',
  styleUrls: ['./form-movimiento.page.scss'],
})
export class FormMovimientoPage implements OnInit {

  clientes: any[] = [];

  clienteSelected: any[] = [];

  textoAbuscar: string = '';

  tipos_de_movimientos: any[] = [
    {
      id: 1,
      nombre: 'COMPRA',
    },
    {
      id: 2,
      nombre: 'PAGO',
    },
    {
      id: 3,
      nombre: 'INGRESO',
    },
    {
      id: 4,
      nombre: 'EGRESO',
    }
  ];

  movimiento = {
    tipo_movimiento: '',
    monto: '',
    cuenta_corriente_id: ''
  }

  constructor( private paolainService: PaolainService,
               private modalCtrl: ModalController,
               private router: Router) { }

  ngOnInit() {
  	console.log(this.clientes);
  	this.paolainService.getClientes().subscribe( clientes =>{ 
  		console.log(clientes);
  		this.clientes = clientes;
  	});

  }

  selectCliente(c){
  	this.clienteSelected = c;
    this.movimiento.cuenta_corriente_id = c.cuenta_corriente.id;
  }

  buscarCliente(event){
  	this.textoAbuscar = event.detail.value;
  }

  limpiarClienteSelected(){
  	this.clienteSelected = [];
  	console.log(this.clienteSelected)
  }

  sendForm(){
    this.paolainService.addMovimiento(this.movimiento).subscribe( res =>{ 
      this.movimiento.cuenta_corriente_id = '';
      this.movimiento.monto = '';
      this.movimiento.tipo_movimiento = '';
      this.clienteSelected = [];
      this.router.navigate(['/inicio']);
    });

  }

  async abrirModalCliente(){
    const modal = await this.modalCtrl.create({
      component: ModalBuscarClientePage,
      componentProps:{
        name: '',
      }
    });

    await modal.present();
  }

}

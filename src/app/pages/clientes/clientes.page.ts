import { Component, OnInit } from '@angular/core';
import { PaolainService } from '../../services/paolain.service';
import { ModalAbmClientePage } from '../modal-abm-cliente/modal-abm-cliente.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: any[] = [];
  textoAbuscar: string = '';


  constructor(  private paolainService: PaolainService,
  				      private modalCtrl: ModalController) { }

  ngOnInit() {
  	this.getClientes();
  }

  getClientes(){
  	this.paolainService.getClientes().subscribe( clientes =>{ 
  		this.clientes = clientes;
  	});
  }

  buscarCliente(event){
  	this.textoAbuscar = event.detail.value;
  }

  async abrirModalCliente(cliente, accion){
    const modal = await this.modalCtrl.create({
      component: ModalAbmClientePage,
      componentProps:{
        id: cliente.id,
        nombre: cliente.nombre,
        accion: accion
      }
    });

    await modal.present();

    const {data} = await modal.onDidDismiss(); //data = {cargarClientes: true} si se creo un cliente

    if(data) {
    	this.getClientes();
    }

  }

  crear(){
    const cliente = {};
    this.abrirModalCliente(cliente, 'A')
  }

  editar(cliente){
    this.abrirModalCliente(cliente, 'M')
  }

  eliminar(cliente){
    this.paolainService.eliminarCliente(cliente.id).subscribe( res =>{ 
      this.getClientes();
    });;
  }

}

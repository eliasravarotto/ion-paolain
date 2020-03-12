import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaolainService } from '../../services/paolain.service';

@Component({
  selector: 'app-modal-abm-cliente',
  templateUrl: './modal-abm-cliente.page.html',
  styleUrls: ['./modal-abm-cliente.page.scss'],
})
export class ModalAbmClientePage implements OnInit {

  @Input() id;
  @Input() nombre;
  @Input() accion;

  constructor( private modalCtrl: ModalController,
  				private paolainService: PaolainService ) { }

  ngOnInit() {
  }

  cerrar( data ){
  	this.modalCtrl.dismiss(data);
  }

  guardarCliente(){
    if(this.accion == 'A') {
    	this.paolainService.crearCliente(this.nombre).subscribe( res =>{ 
    		console.log(res);
    		this.nombre = '';
    		this.cerrar({cargarClientes: true});
      });
    }

    if(this.accion == 'M') {
      this.paolainService.editarCliente(this.nombre, this.id).subscribe( res =>{ 
        console.log(res);
        this.nombre = '';
        this.cerrar({cargarClientes: true});
      });
    }


  }



}

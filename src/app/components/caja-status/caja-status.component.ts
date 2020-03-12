import { Component, OnInit, Input } from '@angular/core';
import { RespuestaGetStatusCaja, DatosCaja } from '../../Interfaces/interfaces';
import { PaolainService } from '../../services/paolain.service';

@Component({
  selector: 'app-caja-status',
  templateUrl: './caja-status.component.html',
  styleUrls: ['./caja-status.component.scss'],
})
export class CajaStatusComponent implements OnInit {

	@Input() caja: DatosCaja[] = [];

  constructor( private paolainService: PaolainService  ) { }

  ngOnInit(){
  	this.paolainService.getStatusCaja()
  		.subscribe( res => {
  			console.log(res.data);
  			this.caja = res.data;
  		} );
  }

}

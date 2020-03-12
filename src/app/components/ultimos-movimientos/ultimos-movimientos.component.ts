import { Component, OnInit, Input } from '@angular/core';
import { PaolainService } from '../../services/paolain.service';
import { Observable } from 'rxjs';
import { Movimiento } from '../../Interfaces/interfaces';


@Component({
  selector: 'app-ultimos-movimientos',
  templateUrl: './ultimos-movimientos.component.html',
  styleUrls: ['./ultimos-movimientos.component.scss'],
})
export class UltimosMovimientosComponent implements OnInit {

  @Input() limit: number;
  movimientos: Observable<Movimiento[]>;

  constructor( private paolainService: PaolainService ) { }

  ngOnInit(){
  	var limit = this.limit;
  	this.movimientos = this.paolainService.getUltimosMovimientos(limit);
  	this.paolainService.getUltimosMovimientos(limit).subscribe( res =>{ console.log(res) } );
  }

}

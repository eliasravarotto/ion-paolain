import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaGetStatusCaja, Movimiento, Cliente} from '../Interfaces/interfaces';

const apikey = environment.apikey;
const apiurl = environment.apiurl;


@Injectable({
  providedIn: 'root'
})
export class PaolainService {

  constructor( private http: HttpClient ) { }

  private ejecutarQuery<T>( query: string ){

  	query = apiurl + query + 'api_token='+apikey;

  	return this.http.get<T>( query );

  }


  getStatusCaja(){
  	return this.ejecutarQuery<RespuestaGetStatusCaja>('caja_estado?')
  }

  getUltimosMovimientos(limit){
    if(limit == null) {
  	  return this.ejecutarQuery<Movimiento[]>('ultimos_movimientos?')
    }else{
      return this.ejecutarQuery<Movimiento[]>('ultimos_movimientos?limit='+limit+'&')
    }
  }

  getClientes(){
    return this.ejecutarQuery<any[]>('clientes?')
  }

  addMovimiento(movimiento){
    var query = apiurl + 'movimiento_add?api_token='+apikey;

    return this.http.post( query, movimiento );
  }

  crearCliente(nombre){
    var query = apiurl + 'clientes?api_token='+apikey;

    return this.http.post( query, {nombre: nombre} );
  }

  editarCliente(nombre, id){
    var query = apiurl + 'clientes/'+id+'?api_token='+apikey;

    return this.http.put( query, {nombre: nombre} );
  }

  eliminarCliente(id){
    var query = apiurl + 'clientes/'+id+'?api_token='+apikey;

    return this.http.delete( query );
  }

}

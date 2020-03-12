import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
  			textoAbuscar: string,
  			columna: string): any[] {

    if(textoAbuscar === '') {
    	return arreglo;
    }

    textoAbuscar = textoAbuscar.toLowerCase();

    return arreglo.filter( item => {
    	return item[columna].toLowerCase()
    						.includes(textoAbuscar);
    });
  }

}

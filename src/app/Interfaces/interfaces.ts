export interface RespuestaGetStatusCaja{
	data: DatosCaja[];
}

export interface DatosCaja{
	capital: string;
}

export interface RespuestaUltimosMov{
	data: Movimiento[];
}

export interface Movimiento{
	tipo_movimiento: string;
}

export interface RespuestaClientes{
	data: Cliente[];
}
export interface Cliente{
	id: number;
	nombre: string;
}
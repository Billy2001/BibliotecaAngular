export class Revista{
    constructor(
        public _id:string,
        public autor:string,
        public titulo:string,
        public edicion:string,
        public palabrasClave:string,
        public descripcion:string,
        public temas:string,
        public copias:string,
        public disponibles:string,
        public frecuencia:string
        ){}
}
import {Component , OnInit} from '@angular/core'
import {Libro} from '../../../models/libro';
@Component({
    selector: 'admin-addLibro',
    templateUrl: './addLibro.component.html',
})
export class AddLibroComponent implements OnInit{
     title:string;
     libro:Libro;
    constructor(      
    ){
      this.title='Agregar Libro'
      this.libro=new Libro(' ',' ',' ',' ',' ',' ',' ',' ',' ');
    }
    ngOnInit(){
      console.log('register.component cargado!!')
    }
    onSubmit(){
        console.log(this.libro)            
    }
  
}
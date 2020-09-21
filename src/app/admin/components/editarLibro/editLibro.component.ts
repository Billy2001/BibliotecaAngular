import {Component , OnInit} from '@angular/core'
import {Libro} from '../../../models/libro';
@Component({
    selector: 'admin-editLibro',
    templateUrl: './editLibro.component.html',
})
export class EditLibroComponent implements OnInit{
     title:string;
     libro:Libro;
    constructor(      
    ){
      this.title='Editar Libro'
      this.libro=new Libro(' ',' ',' ',' ',' ',' ',' ',' ',' ');
    }
    ngOnInit(){
      console.log('Edit.component cargado!!')
    }
    onSubmit(){
        console.log(this.libro)            
    }
  
}
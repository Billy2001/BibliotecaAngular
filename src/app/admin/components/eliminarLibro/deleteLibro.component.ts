import {Component} from '@angular/core'
import {Libro} from '../../../models/libro';

@Component({
    selector: 'admin-editUser',
  templateUrl: './delete.component.html'
})
export class DeleteLibroComponent {
    public title = 'Eliminar Libro';
    public libro: Libro;
    constructor(
      ){
        this.libro=new Libro(' ',' ',' ',' ',' ',' ',' ',' ',' ');
      }
      ngOnInit(){
        console.log('delte.component cargado!!')
      }
      onSubmit(){
        console.log(this.libro);
      }
  
}
import {Component , OnInit} from '@angular/core'
import {Revista} from '../../../models/revista';
@Component({
    selector: 'admin-editRevista',
    templateUrl: './editRevista.component.html',
})
export class EditRevistaComponent implements OnInit{
     title:string;
     revista:Revista;
    constructor(      
    ){
      this.title='Editar Revista'
      this.revista=new Revista(' ',' ',' ',' ',' ',' ',' ',' ',' ',' ');
    }
    ngOnInit(){
      console.log('edit.component cargado!!')
    }
    onSubmit(){
        console.log(this.revista)            
    }
  
}
import {Component , OnInit} from '@angular/core'
import {Revista} from '../../../models/revista';
@Component({
    selector: 'admin-deleteRevista',
    templateUrl: './deleteRevista.component.html',
})
export class DeleteRevistaComponent implements OnInit{
     title:string;
     revista:Revista;
    constructor(      
    ){
      this.title='Eliminar Revista'
      this.revista=new Revista(' ',' ',' ',' ',' ',' ',' ',' ',' ',' ');
    }
    ngOnInit(){
      console.log('delete.component cargado!!')
    }
    onSubmit(){
        console.log(this.revista)            
    }
  
}
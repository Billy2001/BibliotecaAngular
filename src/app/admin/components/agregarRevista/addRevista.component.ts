import {Component , OnInit} from '@angular/core'
import {Revista} from '../../../models/revista';
@Component({
    selector: 'admin-addRevista',
    templateUrl: './addRevista.component.html',
})
export class AddRevistaComponent implements OnInit{
     title:string;
     revista:Revista;
    constructor(      
    ){
      this.title='Agregar Revista'
      this.revista=new Revista(' ',' ',' ',' ',' ',' ',' ',' ',' ',' ');
    }
    ngOnInit(){
      console.log('register.component cargado!!')
    }
    onSubmit(){
        console.log(this.revista)            
    }
  
}
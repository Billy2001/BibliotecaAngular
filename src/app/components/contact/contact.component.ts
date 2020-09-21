import {Component, OnInit} from '@angular/core'
@Component({
    selector: 'Contacto',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
    title = 'Contacto';    
        ngOnInit(){
            console.log('contact.component cargado !!');
        }
        
        onSubmit(){
          console.log('Correo mandado');
        }
    
}
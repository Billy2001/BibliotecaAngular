import {Component, OnInit} from '@angular/core'
@Component({
    selector: 'Revista',
  templateUrl: './revista.component.html'
})
export class RevistaComponent implements OnInit{
    title = 'Revista';
    ngOnInit(){
        console.log('Revista.component cargado !!');
    }    
}
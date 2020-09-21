import {Component, OnInit} from '@angular/core'
@Component({
    selector: 'Libro',
  templateUrl: './libro.component.html'
})
export class LibroComponent implements OnInit{
    title = 'Libro';
    ngOnInit(){
        console.log('Libro.component cargado !!');
    }
}
import {Component, OnInit} from '@angular/core'
@Component({
    selector: 'Home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    title = 'Home';
    ngOnInit(){
        console.log('home.component cargado !!');
    }
}
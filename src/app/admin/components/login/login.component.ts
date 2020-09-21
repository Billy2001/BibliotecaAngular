import {Component , OnInit} from '@angular/core'
import {User} from '../../../models/user';


@Component({
    selector: 'admin-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
     public title = 'Login';
     public user:User;
     constructor(
    ){
      this.user=new User('','','','','Role_User','')
    }
    ngOnInit(){
      console.log('login.component cargado!!')
    }
    onSubmit(){
      console.log(this.user);
    }
}
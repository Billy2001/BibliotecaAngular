import {Component , OnInit} from '@angular/core'
import {User} from '../../../models/user';
import {UserService} from '../../../services/user/user.service';
@Component({
    selector: 'admin-addUser',
    templateUrl: './addUser.component.html',
})
export class AddUserComponent implements OnInit{
     title:string;
     user:User;
    constructor(
      private _userService: UserService
    ){
      this.title='Agregar User'
      this.user=new User('','','','','Role_User','')
    }
    ngOnInit(){
      console.log('register.component cargado!!')
      console.log(this._userService.saveUser)
    }
    onSubmit(){
      this._userService.saveUser(this.user).subscribe(
        Response=>{       
             
        },
        error=>{
          console.log(<any>error);
        }
        
      )
    }
  
}
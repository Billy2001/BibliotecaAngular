import {Component} from '@angular/core'
import {User} from '../../../models/user';

@Component({
    selector: 'admin-editUser',
  templateUrl: './editUser.component.html'
})
export class EditUserComponent {
    public title = 'Editar Usuario';
    public user: User;
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
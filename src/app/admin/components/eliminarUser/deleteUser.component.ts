import {Component} from '@angular/core'
import {User} from '../../../models/user';

@Component({
    selector: 'admin-deleteUser',
  templateUrl: './deleteUser.component.html'
})
export class DeleteUserComponent {
    public title = 'Eliminar Usuario';
    public user:User;
    constructor(
      ){
        this.user=new User('','','','','Role_User','')
      }
      ngOnInit(){
        console.log('delete.component cargado!!')
      }
      onSubmit(){
        console.log(this.user);
      }
}
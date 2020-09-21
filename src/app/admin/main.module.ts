import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
//Ruta
import { MainRoutingModule } from './main-routing.module';
//componentes
import {AddUserComponent} from './components/agregarUser/addUser.component';
import {EditUserComponent} from './components/editarUser/editUser.component';
import {DeleteUserComponent}from './components/eliminarUser/deleteUser.component';
import {ListUserComponent} from './components/listarUser/listUser.component';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {AddLibroComponent} from './components/agregarLibro/addLibro.component'
import {EditLibroComponent} from './components/editarLibro/editLibro.component';
import {DeleteLibroComponent} from './components/eliminarLibro/deleteLibro.component';
import {AddRevistaComponent} from './components/agregarRevista/addRevista.component';
import {EditRevistaComponent} from './components/editarRevista/editRevista.component';
import {DeleteRevistaComponent} from './components/eliminarRevista/deleteRevista.component';
@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListUserComponent,
    MainComponent,
    LoginComponent,
    AddLibroComponent,
    EditLibroComponent,
    DeleteLibroComponent,
    AddRevistaComponent,
    EditRevistaComponent,
    DeleteRevistaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule  
  ],
  exports:[
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListUserComponent,
    MainComponent
  ],
  providers:[]
})
export class MainModule { }

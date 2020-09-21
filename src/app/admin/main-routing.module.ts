import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import {AddUserComponent} from './components/agregarUser/addUser.component';
import {EditUserComponent} from './components/editarUser/editUser.component';
import {DeleteUserComponent}from './components/eliminarUser/deleteUser.component';
import {ListUserComponent} from './components/listarUser/listUser.component';
import {MainComponent} from './components/main/main.component';
import {AddLibroComponent} from './components/agregarLibro/addLibro.component';
import {EditLibroComponent} from './components/editarLibro/editLibro.component';
import {DeleteLibroComponent} from './components/eliminarLibro/deleteLibro.component';
import {AddRevistaComponent} from './components/agregarRevista/addRevista.component';
import {EditRevistaComponent} from './components/editarRevista/editRevista.component';
import {DeleteRevistaComponent} from './components/eliminarRevista/deleteRevista.component';

const routes: Routes = [
    {
      path: 'admin-panel',
      component:MainComponent,
      children:[
        {path:'UserList',component:ListUserComponent},
        {path:'UserAdd',component:AddUserComponent},
        {path:'UserEdit',component:EditUserComponent},
        {path:'UserDelete',component:DeleteUserComponent}, 
        {path:'LibroAdd',component:AddLibroComponent},
        {path:'LibroEdit',component:EditLibroComponent},
        {path:'LibroDelete',component:DeleteLibroComponent},        
        {path:'RevistaAdd',component:AddRevistaComponent},
        {path:'RevistaEdit',component:EditRevistaComponent},
        {path:'RevistaDelete',component:DeleteRevistaComponent},
        {path:'main',component:MainComponent},
        {path:'**',component:ListUserComponent}
      ]
    },{path:'',redirectTo:'admin-panel',pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

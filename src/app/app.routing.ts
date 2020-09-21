import { from } from 'rxjs';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes
import {HomeComponent} from './components/home/home.component';
import {LibroComponent} from './components/libro/libro.component';
import {RevistaComponent} from './components/revista/revista.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from '../app/admin/components/login/login.component';

const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'libro',component:LibroComponent},
    {path:'home',component:HomeComponent},
    {path:'revista',component:RevistaComponent},
    {path:'contacto',component:ContactComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:HomeComponent}
    
];
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
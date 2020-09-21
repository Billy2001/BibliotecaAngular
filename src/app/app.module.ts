import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

//servicios
import {UserService} from './services/user/user.service';
//Modulos
import { MainModule } from './admin/main.module';
//Componentes
import {HomeComponent} from './components/home/home.component';
import {LibroComponent} from './components/libro/libro.component';
import {RevistaComponent} from './components/revista/revista.component';
import {ContactComponent} from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibroComponent,
    RevistaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    MainModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

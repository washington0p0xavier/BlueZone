import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CadastroUsuarioComponent } from './cadastro_usuario/cadastro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioSenha } from './login/login-usuario.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioSenha,
    CadastroUsuarioComponent,
    CadastroVeiculoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'login-usuario', pathMatch: 'full'
      },
      {
        path: 'login-usuario', component: UsuarioSenha
      },
      {
        path: 'menu', component: MenuComponent
      },
      {
        path: 'cadastro-usuario', component: CadastroUsuarioComponent 
      },
      {
        path: 'cadastro-veiculo', component: CadastroVeiculoComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

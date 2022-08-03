import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './sharepage/navebar/navebar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { StatusComponent } from './pages/status/status.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContatoComponent,
    CardapioComponent,
    CarrinhoComponent,
    StatusComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

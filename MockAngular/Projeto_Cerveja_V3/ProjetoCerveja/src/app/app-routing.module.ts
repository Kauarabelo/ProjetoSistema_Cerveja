import { StatusComponent } from './pages/status/status.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'menu', component: MenuComponent},
  { path:'about', component: AboutComponent},
  { path:'contato', component: ContatoComponent},
  { path:'cardapio', component: CardapioComponent},
  { path:'carrinho', component: CarrinhoComponent},
  { path:'status', component: StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

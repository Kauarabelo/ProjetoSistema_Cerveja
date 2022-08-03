import { StatusComponent } from './pages/status/status.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'contato', component: ContatoComponent},
  { path:'cardapio', component: CardapioComponent},
  { path:'carrinho/:id', component: CarrinhoComponent},
  { path:'status', component: StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

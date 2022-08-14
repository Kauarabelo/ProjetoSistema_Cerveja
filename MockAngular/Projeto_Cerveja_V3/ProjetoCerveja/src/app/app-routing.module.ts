import { ClienteComponent } from './pages/cliente/cliente/cliente.component';
import { StatusComponent } from './pages/status/status.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'sobre', component: SobreComponent},
  { path:'cardapio', component: CardapioComponent},
  { path:'carrinho/:id', component: CarrinhoComponent},
  { path:'carrinho', component: CarrinhoComponent},
  { path:'status', component: StatusComponent},
  { path:'cliente', component: ClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

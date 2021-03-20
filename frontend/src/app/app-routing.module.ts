import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent},
  {
    path:'produto',
    component:ProdutoCrudComponent
  },
  {
    path:'product/create',
    component:ProductCreateComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

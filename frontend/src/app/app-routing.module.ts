import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { LoginComponent } from './component/login/login.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';



const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"login",
    component: LoginComponent
  },

  {
    path:"subscribe",
    component: SubscribeComponent
  },

  {
    path:"product",
    component:ProdutoCrudComponent
  },
  {
    path:"product/create",
    component:ProductCreateComponent
  },
  {
    path:"product/update/:id",
    component:ProductUpdateComponent
  },
  {
    path:"product/delete/:id",
    component:ProductDeleteComponent
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

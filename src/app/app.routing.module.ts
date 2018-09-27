import {NgModule} from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProduitResolver} from './produit/produit.resolver';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

export const appRoutes:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'produit',
    component:ProduitComponent,
    resolve : {
      produits:ProduitResolver
    }
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'}

];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers:[ProduitResolver]

})
export class AppRoutingModule {

}

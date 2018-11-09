import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/produit.resolver';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        outlet:'contentOutlet'
      },
      {
        path: 'user',
        component: UserComponent,
        outlet:'contentOutlet'
      },
      {
        path: 'produit',
        component: ProduitComponent,
        resolve: {
          produits: ProduitResolver
        },
        outlet:'contentOutlet'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }

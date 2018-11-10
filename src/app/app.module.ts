import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitService2 } from './produit/produit.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { ProductService } from './produit/product.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { XhrInterceptor } from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { principalReducer } from './shared/principal.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer})
  ],
  providers: [ProduitService2,ProductService,AppService,CookieService,
    {provide:HTTP_INTERCEPTORS,useClass:XhrInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

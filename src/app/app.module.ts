import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/common/top-bar/top-bar.component';
import { NotFoundComponent } from './components/pages/site/not-found/not-found.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { ContactUsComponent } from './components/pages/site/contact-us/contact-us.component';
import { AboutComponent } from './components/pages/site/about/about.component';
import { TopbarLayoutComponent } from './components/layouts/topbar-layout/topbar-layout.component';
import { SidebarLayoutComponent } from './components/layouts/sidebar-layout/sidebar-layout.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SharedModule } from './modules/shared/shared.module';
import { MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    NotFoundComponent,
    CartComponent,
    ContactUsComponent,
    AboutComponent,
    TopbarLayoutComponent,
    SidebarLayoutComponent,
    SidebarComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

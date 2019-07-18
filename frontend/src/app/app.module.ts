import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistersComponent } from './registers/registers.component';
import { CreateRegistersComponent } from './create-registers/create-registers.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-registers', component: CreateRegistersComponent },
  { path: 'registers', component: RegistersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistersComponent,
    CreateRegistersComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

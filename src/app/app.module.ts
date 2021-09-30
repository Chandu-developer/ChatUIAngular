import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// material imports
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import modules
import { LayoutModule } from './layout/layout.module';
import {AuthenticateModule} from './authenticate/authenticate.module'

import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    ReactiveFormsModule,

    //modules
    LayoutModule,
    AuthenticateModule,
    
    // Material imports
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

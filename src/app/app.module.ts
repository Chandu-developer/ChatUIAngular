import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

// material imports from shared/material.modul
import { MaterialModule } from './_shared/material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import modules
import { LayoutModule } from './layout/layout.module';
import {AuthenticateModule} from './authenticate/authenticate.module'
import { ChatModule } from './chat/chat.module';
import { SharedComponentsModule } from './_shared/shared-components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,

    //modules
    LayoutModule,
    AuthenticateModule,
    ChatModule,
    SharedComponentsModule
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

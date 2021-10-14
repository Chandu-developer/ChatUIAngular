import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/_shared/material.module'



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class ChatModule { }

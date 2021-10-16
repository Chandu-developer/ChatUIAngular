import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/_shared/material.module';
import { ConversationComponent } from './conversation/conversation.component'



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    ConversationComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class ChatModule { }

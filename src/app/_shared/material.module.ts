import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'; 


const Material_MODULES = [
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatDividerModule,
  MatListModule,
]

@NgModule({
  declarations: [],
  imports: [Material_MODULES],
  exports: [Material_MODULES],
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FinderRoutingModule } from './finder-routing.module';
import { FinderComponent } from './finder.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [FinderComponent, SearchbarComponent],
  imports: [
    CommonModule,
    FinderRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FinderModule { }

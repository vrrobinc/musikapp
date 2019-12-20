import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Guitar1Page } from './guitar1.page';
import { ExpandableComponent } from "./expandable/expandable.component"
const routes: Routes = [
  {
    path: '',
    component: Guitar1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Guitar1Page, ExpandableComponent]
})
export class Guitar1PageModule {}

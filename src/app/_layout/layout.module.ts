import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './components/aside/aside.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class LayoutModule { }

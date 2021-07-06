import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from "./count-details/count-details.component"
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:"count",
    component: ItemsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

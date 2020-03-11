import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';



const routes: Routes = [
  { path: '', redirectTo: 'registeration', pathMatch: 'full' },

  {
    path: '', component: RegisterationComponent
  }, {
    path: 'registeration', component: RegisterationComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

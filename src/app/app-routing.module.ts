import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'branches', component: BranchesComponent},
  {path: 'contact', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

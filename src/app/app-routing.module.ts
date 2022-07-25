import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AboutComponent } from './components/pages/about/about.component';
import { EditMomentUniqueComponent } from './components/pages/edit-moment-unique/edit-moment-unique.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentUniqueComponent } from './components/pages/moment-unique/moment-unique.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { ErroComponent } from './components/pages/not-existent route/erro.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'about', component: AboutComponent},
  {path:'moments/new', component: NewMomentComponent},
  {path:'moments/edit/:id', component: EditMomentUniqueComponent},
  {path:'moments/:id', component: MomentUniqueComponent},
  {path: '**', component: ErroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

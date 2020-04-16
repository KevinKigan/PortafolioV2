import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortafolioComponent} from './components/pages/portafolio/portafolio.component';
import {KnowMeComponent} from './components/pages/knowme/knowme.component';
import {CoursesComponent} from './components/pages/courses/courses.component';
import {ProjectsComponent} from './components/pages/projects/projects.component';


const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'knowme', component: KnowMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'courses', component: CoursesComponent  },
  { path: '**', pathMatch: 'full' , redirectTo: 'home'}, // Cuaquier otra ruta que no sea las anteriores, redireccionará a home


];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

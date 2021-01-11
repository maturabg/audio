import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  // redirects
  { path: '',   redirectTo: '/eng/dzi/', pathMatch: 'full' },
  { path: ':lang', pathMatch: 'full', redirectTo: '/eng/dzi/' },
  // routes
  { path: ':lang/:type', component: HomeComponent },
  { path: ':lang/:type/:year', pathMatch: 'full', component: HomeComponent },
  { path: ':lang/:type/:year/:var', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

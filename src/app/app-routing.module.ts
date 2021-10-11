import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistantComponent } from './components/assistant/assistant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { InitiateComponent } from './components/initiate/initiate.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: AssistantComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'initiate', component: InitiateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

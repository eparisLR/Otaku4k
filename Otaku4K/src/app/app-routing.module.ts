import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FansComponent} from './components/fans/fans.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {MemberComponent} from './components/member/member.component';
import {ActivitiesComponent} from './components/activities/activities.component';

const routes: Routes = [
  {path: 'fans', component: FansComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: '', component: ActivitiesComponent},
  {path: 'presentation/:name', component: MemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

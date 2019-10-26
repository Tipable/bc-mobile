import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentIdComponent } from './home/student-id/student-id.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { StudentLifeComponent } from './home/student-life/student-life.component';
import { MapsComponent } from './navigation/maps/maps.component';
import { GuidanceComponent } from './home/guidance/guidance.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'guest-home',
    component: GuestHomeComponent,
  },
  {
    path:"student-id",
    component: StudentIdComponent,
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'student-life',
    component: StudentLifeComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
  {
    path: 'guidance',
    component: GuidanceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

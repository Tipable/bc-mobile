import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import {MatChipsModule} from '@angular/material/chips';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentIdComponent } from './home/student-id/student-id.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { StudentLifeComponent } from './home/student-life/student-life.component';
import { MapsComponent } from './navigation/maps/maps.component';
import { GuidanceComponent } from './home/guidance/guidance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    StudentIdComponent,
    GuestHomeComponent,
    StudentLifeComponent,
    MapsComponent,
    GuidanceComponent
  ],
  imports: [
    MatChipsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

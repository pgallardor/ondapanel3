import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { PaymentsComponent } from './payments/payments.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {}
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {}
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    data: {}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProjectsComponent,
    PaymentsComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { ContactService } from "./contact/contact.service";

import { UserComponent } from './user/user.component';
import { UserService } from "./user/user.service";

const appRoutes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  {
    path: 'users',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ContactService,
    UserService
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }

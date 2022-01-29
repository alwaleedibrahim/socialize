import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/user/login//login.component';
import { SignupComponent } from './pages/user/signup/signup.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { UpdateComponent } from './pages/user/update/update.component';
import { IndexComponent } from './pages/posts/index/index.component';
import { ShowComponent } from './pages/posts/show/show.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UpdateComponent,
    IndexComponent,
    ShowComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

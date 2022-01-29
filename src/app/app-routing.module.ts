import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/user/login//login.component';
import { SignupComponent } from './pages/user/signup/signup.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { UpdateComponent } from './pages/user/update/update.component';
import { IndexComponent } from './pages/posts/index/index.component';
import { ShowComponent } from './pages/posts/show/show.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "profile", component: ProfileComponent},
  {path: "updateProfile", component: UpdateComponent},
  {path: "post", component: ShowComponent},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

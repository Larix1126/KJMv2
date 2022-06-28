import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';
import { FriendsComponent } from './friends/friends.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [{ path: 'register-component', component: RegisterComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'wall-component', component: WallComponent },
  { path: 'friends-component', component: FriendsComponent },
  { path: 'user-page-component', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import {Admin} from './admin/admin';
import {TestAdmin} from './admin/test-admin/test-admin';
import {FrontendComponent} from './frontend/frontend.component';

export const routes: Routes = [
  {
    path:"",
    component: FrontendComponent
  },
  {
    path: "admin",
    component: Admin,
    children: [
      {path:"test", component:TestAdmin}
    ]
  }

];

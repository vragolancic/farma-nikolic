import { Routes } from '@angular/router';
import {Admin} from './admin/admin';
import {TestAdmin} from './admin/test-admin/test-admin';

export const routes: Routes = [
  {
    path: "admin",
    component: Admin,
    children: [
      {path:"test", component:TestAdmin}
    ]
  }
];

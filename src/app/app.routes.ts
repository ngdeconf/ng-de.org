import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'code-of-conduct',
    component: CodeOfConductComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  }
];

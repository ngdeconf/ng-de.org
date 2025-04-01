import { Routes } from '@angular/router';
import { CodeOfConductComponent } from './components/pages/code-of-conduct.component';
import { HomeComponent } from './components/pages/home.component';
import { ImprintComponent } from './components/pages/imprint.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy.component';

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
  },
  {
    path: 'imprint',
    component: ImprintComponent
  }
];

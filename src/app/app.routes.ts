import { Routes } from '@angular/router';
import { CodeOfConductComponent } from './components/pages/code-of-conduct.component';
import { HomeComponent } from './components/pages/home.component';
import { ImprintComponent } from './components/pages/imprint.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy.component';
import { TalksArchiveComponent } from './components/pages/talks-archive.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'NG-DE - The Angular Conference in Germany'
  },
  {
    path: 'call-for-papers',
    redirectTo: ''
  },
  {
    path: 'for-sponsors',
    redirectTo: ''
  },
  {
    path: 'code-of-conduct',
    component: CodeOfConductComponent,
    title: 'Code of Conduct - NG-DE'
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy - NG-DE'
  },
  {
    path: 'imprint',
    component: ImprintComponent,
    title: 'Imprint - NG-DE'
  },
  {
    path: ':year/talks',
    component: TalksArchiveComponent,
    title: 'Talks Archive - NG-DE'
  }
];

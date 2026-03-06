import { Routes } from '@angular/router';
import { CallForPapersComponent } from './components/pages/call-for-papers.component';
import { CodeOfConductComponent } from './components/pages/code-of-conduct.component';
import { HomeComponent } from './components/pages/home.component';
import { ImprintComponent } from './components/pages/imprint.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy.component';
import { TalksArchiveComponent } from './components/pages/talks-archive.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'NG-DE 2026 - The Largest Angular Conference in Germany'
  },
  {
    path: 'call-for-papers',
    component: CallForPapersComponent,
    title: 'Call for Papers - NG-DE 2026'
  },
  {
    path: 'code-of-conduct',
    component: CodeOfConductComponent,
    title: 'Code of Conduct - NG-DE 2026'
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy - NG-DE 2026'
  },
  {
    path: 'imprint',
    component: ImprintComponent,
    title: 'Imprint - NG-DE 2026'
  },
  {
    path: ':year/talks',
    component: TalksArchiveComponent,
    title: 'Talks Archive - NG-DE'
  }
];

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { PortalMaciComponent } from './MACI-app/components-maci/portal-maci/portal-maci.component';
import { TestMaciComponent } from './MACI-app/components-maci/test-maci/test-maci.component';
import { ResultsMaciComponent } from './MACI-app/components-maci/results-maci/results-maci.component';

import { PortalMcmi3Component } from './MCMI-III-app/components-mcmi-3/portal-mcmi-3/portal-mcmi-3.component';
import { TestMcmi3Component } from './MCMI-III-app/components-mcmi-3/test-mcmi-3/test-mcmi-3.component';
import { ResultsMcmi3Component } from './MCMI-III-app/components-mcmi-3/results-mcmi-3/results-mcmi-3.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'maci',
    component: PortalMaciComponent,
  },
  {
    path: 'maci/testare',
    component: TestMaciComponent,
  },
  {
    path: 'maci/scoruri',
    component: ResultsMaciComponent,
  },

  {
    path: 'mcmi3',
    component: PortalMcmi3Component,
  },
  {
    path: 'mcmi3/testare',
    component: TestMcmi3Component,
  },
  {
    path: 'mcmi3/scoruri',
    component: ResultsMcmi3Component,
  },
];

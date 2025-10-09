import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { PortalMaciComponent } from './applications/MACI-app/components-maci/portal-maci/portal-maci.component';
import { TestMaciComponent } from './applications/MACI-app/components-maci/test-maci/test-maci.component';
import { ResultsMaciComponent } from './applications/MACI-app/components-maci/results-maci/results-maci.component';

import { PortalMcmi3Component } from './applications/MCMI-III-app/components-mcmi-3/portal-mcmi-3/portal-mcmi-3.component';
import { TestMcmi3Component } from './applications/MCMI-III-app/components-mcmi-3/test-mcmi-3/test-mcmi-3.component';
import { ResultsMcmi3Component } from './applications/MCMI-III-app/components-mcmi-3/results-mcmi-3/results-mcmi-3.component';

import { PortalPaSchmieschekComponent } from './applications/P.A-Schmieschek-app/components-pa-schmieschek/portal-pa-schmieschek/portal-pa-schmieschek.component';
import { TestPaSchmieschekComponent } from './applications/P.A-Schmieschek-app/components-pa-schmieschek/test-pa-schmieschek/test-pa-schmieschek.component';
import { ResultsPaSchmieschekComponent } from './applications/P.A-Schmieschek-app/components-pa-schmieschek/results-pa-schmieschek/results-pa-schmieschek.component';

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

  {
    path: 'paschmieschek',
    component: PortalPaSchmieschekComponent,
  },
  {
    path: 'paschmieschek/testare',
    component: TestPaSchmieschekComponent,
  },
  {
    path: 'paschmieschek/scoruri',
    component: ResultsPaSchmieschekComponent,
  },
];

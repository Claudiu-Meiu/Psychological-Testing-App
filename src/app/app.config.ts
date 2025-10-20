import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MY_DATE_FORMATS } from './models/myDateFormats';

import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorIntlService } from './services/overrides/paginatorIntl.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    provideAnimationsAsync(),

    provideHttpClient(withFetch()),

    provideMomentDateAdapter(MY_DATE_FORMATS),

    { provide: MAT_DATE_LOCALE, useValue: 'ro-RO' },

    { provide: MatPaginatorIntl, useClass: PaginatorIntlService },
  ],
};

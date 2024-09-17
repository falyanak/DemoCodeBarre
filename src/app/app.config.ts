import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CodeBarreGateway } from './core/ports/codebarre.gateway';
import { InMemoryCodeBarreGateway } from './core/adapters/in-memory-codebarre.gateway';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {provide: CodeBarreGateway, useValue: new InMemoryCodeBarreGateway()}
    // {
    //   provide: CodeBarreGateway,
    //   useFactory: () => new InMemoryCodeBarreGateway().withCodeBarres,
    // },
  ],
};

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
    withViewTransitions({
      skipInitialTransition: false,
      onViewTransitionCreated: ((_) => {
        console.log('onViewTransitionCreated');
      })
    })
  ),
  importProvidersFrom(HttpClientModule)
  ]
};

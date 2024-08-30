import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient() // Asegúrate de que HttpClient esté disponible también en el servidor
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

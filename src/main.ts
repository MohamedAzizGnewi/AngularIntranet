import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, { preserveWhitespaces: true });
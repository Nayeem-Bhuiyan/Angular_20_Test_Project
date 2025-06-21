import 'bootstrap/dist/css/bootstrap.min.css';


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//global toaster add
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


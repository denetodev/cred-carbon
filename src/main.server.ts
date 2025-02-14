import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    providers: [provideClientHydration()],
  });

export default bootstrap;

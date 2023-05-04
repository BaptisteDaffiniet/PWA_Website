import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const privateKey = "ysAtibPwGX8JSsnu6UrkKjjsg_hMEUbt8oLX9FTreIY";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


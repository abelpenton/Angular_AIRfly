import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    songs: 'songs',
    error404: '404'
  },
  endpoints: {
  },
  votesLimit: 20,
  topSongsLimit: 3,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/AIRfly/airfly-music-app'
};

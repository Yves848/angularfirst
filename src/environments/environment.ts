// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA8oFagommLnfQHeoL8kefSd-Ng0btBO-Y',
    authDomain: 'flymenus.firebaseapp.com',
    databaseURL: 'https://flymenus.firebaseio.com',
    projectId: 'flymenus',
    storageBucket: 'flymenus.appspot.com',
    messagingSenderId: '785466280841'
  },
  GoogleSearch: {
    CSE_API_KEY: '007439388879951561867:3ragl0fkhpm',
    CSE_ID: 'AIzaSyBqR_wNvOw-d9B6C-icZdXR2tk4-awJNdM'
    //CSE_ID: 'AIzaSyDZs8AQuWyQDySbNIGIqrwJf-KZE6v37kc'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

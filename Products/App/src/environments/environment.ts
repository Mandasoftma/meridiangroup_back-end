// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase:{
        apiKey: "AIzaSyBINryh8da1gU8UWQ5nuMJvn7CSvKh5V4w",
        authDomain: "webproducts-2a48d.firebaseapp.com",
        databaseURL: "https://webproducts-2a48d.firebaseio.com",
        projectId: "webproducts-2a48d",
        storageBucket: "webproducts-2a48d.appspot.com",
        messagingSenderId: "527970662690"
    }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

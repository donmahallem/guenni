/*
 * Package @guenni/client-ng
 * Source https://donmahallem.github.io/guenni/
 */

// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// tslint:disable-next-line:ordered-imports
import 'zone.js/dist/zone-testing';

import { getTestBed } from '@angular/core/testing';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false },
});
// Then we find all the tests.
/* eslint-disable @typescript-eslint/no-unsafe-assignment,
   @typescript-eslint/no-unsafe-member-access,
   @typescript-eslint/no-unsafe-call
 */
const context: any = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

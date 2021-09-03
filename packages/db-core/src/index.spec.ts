/*
 * Package @guenni/db-core
 * Source https://donmahallem.github.io/guenni/
 */

import { expect } from 'chai';
import 'mocha';
import * as instance from './index';

describe('index.ts', (): void => {
    describe('index exports', (): void => {
        // tslint:disable-next-line:no-unused-expression
        expect(instance).to.not.be.undefined;
    });
});

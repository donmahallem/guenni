/*!
 * Source https://github.com/donmahallem/guenni Package: db-sqlite
 */

import { expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import { Database } from 'sqlite3';
import { GuenniSQLiteDatabase } from './index';
import { SQLiteUtil } from './sqlite-util';
import { Observable } from 'rxjs';
import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';
import { TestScheduler } from 'rxjs/testing';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { guennitypes } from '@guenni/types';
const testScheduler: TestScheduler = new TestScheduler((actual: any, expected: any): void => {
    // asserting the two objects are equal
    // e.g. using chai.
    expect(actual).deep.equal(expected);
});
describe('index.ts', (): void => {
    describe('IGuenniSQLiteDatabase', (): void => {
        let testSqlDb: Database;
        let testDb: GuenniSQLiteDatabase;
        let sandbox: sinon.SinonSandbox;
        let sqliteGetStub: sinon.SinonStub;
        before((): void => {
            sandbox = sinon.createSandbox();
        });
        beforeEach((done: Mocha.Done): void => {
            sqliteGetStub = sandbox.stub(SQLiteUtil, 'get');
            testSqlDb = new Database(':memory:', done);
            testDb = new GuenniSQLiteDatabase(testSqlDb);
        });
        afterEach((done: Mocha.Done): void => {
            testSqlDb.close(done);
            sandbox.restore();
        });
        describe('getImage', (): void => {
            const testImageId: Buffer = Buffer.from('oo', 'utf8');
            beforeEach((): void => {
                testSqlDb.exec('CREATE TABLE images ( id BLOB PRIMARY KEY);');
            });
            it('should complete without value if not matching', (done: Mocha.Done): void => {
                testScheduler.run((helpers: RunHelpers): void => {
                    const { cold, expectObservable, expectSubscriptions } = helpers;
                    const e1: ColdObservable<any> = cold('-a--b--c---|');
                    sqliteGetStub.returns(e1);
                    const subs: string = '^----------!';
                    const expected: string = '-a--b--c---|';
                    const testObservable: Observable<guennitypes.IImage> = testDb.getImage(testImageId);
                    expect(testObservable).to.deep.equal(e1);
                    expectObservable(testObservable).toBe(expected);
                    if (false) {
                        expectSubscriptions(e1.subscriptions).toBe(subs);
                    }
                    helpers.flush();
                });
                expect(sqliteGetStub.callCount).to.equal(1, 'SQLiteUtil.get should be called once');
                expect(sqliteGetStub.getCall(0).args).to.deep.equal([
                    testSqlDb,
                    'SELECT * FROM images WHERE id = :imgid;', {
                        ':imgid': testImageId,
                    }]);
            });
        });
    });
});

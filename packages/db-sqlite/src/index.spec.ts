/*!
 * Source https://github.com/donmahallem/guenni Package: db-sqlite
 */

import { expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import { Database } from 'sqlite3';
import { GuenniSQLiteDatabase } from './index';
import { SQLiteUtil } from './sqlite-util';
import { TestScheduler, RunHelpers } from 'rxjs/testing';
import { Observable } from 'rxjs';
const testScheduler: TestScheduler = new TestScheduler((actual: any, expected: any): void => {
    // asserting the two objects are equal
    // e.g. using chai.
    expect(actual).deep.equal(expected);
});
describe('index.ts', (): void => {
    describe('IGuenniSQLiteDatabase', (): void => {
        let testSqlDb: Database;
        let testDb: GuenniSQLiteDatabase;
        let nextSpy: sinon.SinonSpy;
        let sandbox: sinon.SinonSandbox;
        let sqliteGetStub: sinon.SinonStub;
        before((): void => {
            sandbox = sinon.createSandbox();
        });
        beforeEach((done: Mocha.Done): void => {
            nextSpy = sandbox.spy();
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
                    const e1: Observable<any> = cold('-a--b--c---|');
                    const subs: string = '^----------!';
                    const expected: string = '-a-----c---|';

                    expectObservable(e1.pipe(throttleTime(3, testScheduler))).toBe(expected);
                    expectSubscriptions(e1.subscriptions).toBe(subs);
                });
                testDb.getImage(testImageId)
                    .subscribe(nextSpy, done, (): void => {
                        expect(nextSpy.callCount).to.equal(0);
                        done();
                    });
            });
            it('should complete with value if matching', (done: Mocha.Done): void => {
                testSqlDb.run('INSERT INTO images (id) VALUES (:test)', {
                    ':test': testImageId,
                });
                testDb.getImage(testImageId)
                    .subscribe(nextSpy, done, (): void => {
                        expect(nextSpy.callCount).to.equal(1);
                        expect(nextSpy.getCall(0).args).to.deep.equal([{
                            id: testImageId,
                        }]);
                        done();
                    });
            });
        });
    });
});

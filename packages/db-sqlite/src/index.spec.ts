/*!
 * Source https://github.com/donmahallem/guenni Package: db-sqlite
 */

import { expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import { Database } from 'sqlite3';
import { GuenniSQLiteDatabase } from './index';

describe('index.ts', (): void => {
    describe('IGuenniSQLiteDatabase', (): void => {
        let testSqlDb: Database;
        let testDb: GuenniSQLiteDatabase;
        let nextSpy: sinon.SinonSpy;
        let sandbox: sinon.SinonSandbox;
        before((): void => {
            sandbox = sinon.createSandbox();
        });
        beforeEach((done: Mocha.Done): void => {
            nextSpy = sandbox.spy();
            testSqlDb = new Database(':memory:', done);
            testDb = new GuenniSQLiteDatabase(testSqlDb);
        });
        afterEach((done: Mocha.Done): void => {
            testSqlDb.close(done);
            sandbox.reset();
        });
        describe('getImage', (): void => {
            const testImageId: Buffer = Buffer.from('oo', 'utf8');
            beforeEach((): void => {
                testSqlDb.exec('CREATE TABLE images ( id BLOB PRIMARY KEY);');
            });
            it('should complete without value if not matching', (done: Mocha.Done): void => {
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

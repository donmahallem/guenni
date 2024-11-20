/*!
 * Source https://github.com/donmahallem/guenni Package: db-sqlite
 */

import { expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import { Database } from 'sqlite3';
import { SQLiteUtil } from './sqlite-util';

describe('sqlite-util.ts', (): void => {
    describe('SQLiteUtil', (): void => {
        let testSqlDb: Database;
        let nextSpy: sinon.SinonSpy;
        let sandbox: sinon.SinonSandbox;
        before((): void => {
            sandbox = sinon.createSandbox();
        });
        beforeEach((done: Mocha.Done): void => {
            nextSpy = sandbox.spy();
            testSqlDb = new Database(':memory:', done);
        });
        afterEach((done: Mocha.Done): void => {
            testSqlDb.close(done);
            sandbox.reset();
        });
        describe('get', (): void => {
            beforeEach((): void => {
                testSqlDb.exec('CREATE TABLE images ( id integer PRIMARY KEY);');
                [1, 2, 3, 4].forEach((idx: number): void => {
                    testSqlDb.exec(`INSERT INTO images (id) VALUES (${idx})`);
                });
            });
            it('should complete without value if not matching', (done: Mocha.Done): void => {
                SQLiteUtil.get(testSqlDb, 'SELECT * FROM images WHERE id = 5;')
                    .subscribe(nextSpy, done, (): void => {
                        expect(nextSpy.callCount).to.equal(0);
                        done();
                    });
            });
            it('should complete with value if matcshing', (done: Mocha.Done): void => {
                SQLiteUtil.get(testSqlDb, 'SELECT * FROM images WHERE id = 2;')
                    .subscribe(nextSpy, done, (): void => {
                        expect(nextSpy.callCount).to.equal(1);
                        expect(nextSpy.getCall(0).args).to.deep.equal([
                            { id: 2 },
                        ]);
                        done();
                    });
            });
            it('should pass on errors', (done: Mocha.Done): void => {
                SQLiteUtil.get(testSqlDb, 'SELECT * FROM notfound WHERE id = 2;')
                    .subscribe(nextSpy, (err: any): void => {
                        expect(err).to.be.instanceOf(Error);
                        expect(err.message).to.equal('SQLITE_ERROR: no such table: notfound');
                        expect(nextSpy.callCount).to.equal(0);
                        done();
                    }, (): void => {
                        done(new Error('should not be called'));
                    });
            });
        });
    });
});

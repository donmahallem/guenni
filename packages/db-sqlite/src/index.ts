/*!
 * Source https://github.com/donmahallem/guenni Package: db-sqlite
 */
import { IGuenniCoreDatabase } from '@guenni/db-core';
import { guennitypes } from '@guenni/types';
import { Observable } from 'rxjs';
import { Database } from 'sqlite3';
import { SQLiteUtil } from './sqlite-util';

export class GuenniSQLiteDatabase implements IGuenniCoreDatabase {
    public constructor(public db: Database) {

    }

    public getImage(id: Uint8Array): Observable<guennitypes.IImage> {
        return SQLiteUtil.get(this.db, 'SELECT * FROM images WHERE id = :imgid;', {
            ':imgid': id,
        });
    }
}

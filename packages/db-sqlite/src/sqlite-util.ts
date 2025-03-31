/*!
 * Source https://github.com/donmahallem/guenni Package: db-sqlite
 */

import { Observable, Subscriber, TeardownLogic } from 'rxjs';
import { Database } from 'sqlite3';

export class SQLiteUtil {
    public static get<T>(db: Database, query: string, param?: any): Observable<T> {
        return new Observable((subscriber: Subscriber<T>): TeardownLogic => {
            db.get(query, param, (err: any | undefined, row: any): void => {
                if (err) {
                    subscriber.error(err);
                    return;
                } else if (row) {
                    subscriber.next(row);
                }
                subscriber.complete();
            });
        });
    }
}

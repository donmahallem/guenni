/*!
 * Source https://github.com/donmahallem/guenni Package: db-core
 */
import { guennitypes } from '@guenni/types';
import { Observable } from 'rxjs';
export interface IGuenniCoreDatabase {
    getImage(id: Buffer): Observable<guennitypes.IImage>;
}

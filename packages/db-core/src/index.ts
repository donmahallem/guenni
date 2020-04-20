/*!
 * Source https://github.com/donmahallem/guenni Package: db-core
 */
import { guennitypes } from '@guenni/types';
import { Observable } from 'rxjs';

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export interface IGuenniCoreDatabase {
    getImage(id: PropType<guennitypes.IImage, 'id'>): Observable<guennitypes.IImage>;
}

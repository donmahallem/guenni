/*
 * Package @guenni/db-core
 * Source https://donmahallem.github.io/guenni/
 */

import { guennitypes } from '@guenni/types';
import { Observable } from 'rxjs';

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export interface IGuenniCoreDatabase {
    getImage(id: PropType<guennitypes.IImage, 'id'>): Observable<guennitypes.IImage>;
}

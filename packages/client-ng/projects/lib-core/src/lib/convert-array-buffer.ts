/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
type SourceProto<T> = Type<T> & {
    decode(inp: Uint8Array): T;
};
type OperatorReturnType<T> = (source: Observable<ArrayBuffer>) => Observable<T>;
export const convertArrayBuffer = <T>(proto: SourceProto<T>): OperatorReturnType<T> => {
    return (source: Observable<ArrayBuffer>): Observable<T> => {
        return source.pipe(map((data: ArrayBuffer): T => {
            const uintBuffer: Uint8Array = new Uint8Array(data);
            return proto.decode(uintBuffer);
        }));
    };
};

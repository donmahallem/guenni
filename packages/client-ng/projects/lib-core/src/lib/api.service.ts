/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { guennitypes } from '@guenni/types';
import { Observable } from 'rxjs';
import { convertArrayBuffer } from './convert-array-buffer';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  public constructor(public http: HttpClient) { }

  public getImage(id: number): Observable<guennitypes.IImage> {
    return this.http.get('settings', {
      responseType: 'arraybuffer',
    }).pipe(convertArrayBuffer(guennitypes.Image));
  }
}

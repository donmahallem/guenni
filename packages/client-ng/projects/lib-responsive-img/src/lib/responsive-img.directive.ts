/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { Directive, HostBinding, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { guennitypes } from '@guenni/types';

@Directive({
  selector: 'img[gRespimgImg]',
})
export class ResponsiveImgDirective {

  @Input()
  public image: guennitypes.IImage;

  @HostBinding('attr.srcset')
  public srcset: string;
  @HostBinding('attr.src')
  public get src(): string {
    if (this.image && this.image.title) {
      return this.image.title;
    }
    return undefined;
  }
  constructor() { }

}

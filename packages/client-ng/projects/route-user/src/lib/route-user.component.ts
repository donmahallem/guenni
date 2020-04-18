/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'lib-core';

@Component({
  selector: 'lib-route-user',
  styles: [
  ],
  template: `
    <p>
      route-user works!
    </p>
  `,
})
export class RouteUserComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

}

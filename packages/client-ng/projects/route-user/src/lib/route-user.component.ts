import { Component, OnInit } from '@angular/core';
import { ApiService } from "lib-core";

@Component({
  selector: 'lib-route-user',
  template: `
    <p>
      route-user works!
    </p>
  `,
  styles: [
  ]
})
export class RouteUserComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

}

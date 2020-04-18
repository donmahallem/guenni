/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // tslint:disable-next-line:typedef
    loadChildren: () => import('route-user').then((m) => m.RouteUserModule),
    path: 'user',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

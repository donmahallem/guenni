/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
})
export class AppRoutingModule { }

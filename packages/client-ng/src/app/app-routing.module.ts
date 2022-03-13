/*
 * Package @guenni/client-ng
 * Source https://donmahallem.github.io/guenni/
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
})
export class AppRoutingModule {}

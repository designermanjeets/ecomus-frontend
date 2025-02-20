import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefundAndCancellationComponent } from './refund-and-cancellation.component/refund-and-cancellation.component';

const routes: Routes = [
  { path: '', component: RefundAndCancellationComponent }, // Root path for this module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundAndCancellationRoutingModule {}

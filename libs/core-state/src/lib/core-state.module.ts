import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { coreStateRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(coreStateRoutes), RouterModule],
})
export class CoreStateModule {}

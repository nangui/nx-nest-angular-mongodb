import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { coreDataRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(coreDataRoutes), RouterModule],
})
export class CoreDataModule {}

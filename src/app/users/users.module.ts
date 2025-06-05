import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersRoutingModule } from './users-dashboard/users-routing.module';

@NgModule({
  declarations: [UsersDashboardComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {
  constructor() {
    console.log(`Users module loaded!!!`);
  }
}

import { NgModule } from "@angular/core";

import { SharedComponent } from "./shared.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [SharedComponent, UserListComponent, UserDetailComponent],
  imports: [BrowserModule],
  exports: [SharedComponent, UserListComponent]
})
export class SharedModule {}

import { NgModule } from "@angular/core";

import { SharedComponent } from "./shared.component";
import { UserListComponent } from "./user-list/user-list.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [SharedComponent, UserListComponent],
  imports: [BrowserModule],
  exports: [SharedComponent, UserListComponent]
})
export class SharedModule {}

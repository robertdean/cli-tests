import { NgModule } from "@angular/core";
import { SharedComponent } from "./shared.component";
import { UserListComponent } from "./user-list/user-list.component";

@NgModule({
  declarations: [SharedComponent, UserListComponent],
  imports: [],
  exports: [SharedComponent, UserListComponent]
})
export class SharedModule {}

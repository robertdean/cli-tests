import { sandboxOf } from "angular-playground";
import { UserListComponent } from "./user-list.component";

export default sandboxOf(UserListComponent).add("default", {
  template: `<lib-user-list label="Uzerz"></lib-user-list>`
});

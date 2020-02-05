import { sandboxOf } from "angular-playground";
import { UserListComponent } from "./user-list.component";

export default sandboxOf(UserListComponent, {
  label: "feature 1"
})
  .add("default", {
    template: `<lib-user-list label="Uzerz"></lib-user-list>`
  })
  .add("with one user", {
    template: `<lib-user-list label="One User List" [users]="oneUserList"></lib-user-list>`,
    context:{
      oneUserList = [{name: 'Test User'}]
    }
  });

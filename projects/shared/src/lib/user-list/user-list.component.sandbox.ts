import { sandboxOf } from "angular-playground";
import { UserListComponent } from "./user-list.component";

export default sandboxOf(UserListComponent, {
  label: "feature 1"
})
  .add("default", {
    template: `<lib-user-list label="List with no users"></lib-user-list>`
  })
  .add("with one user", {
    template: `<lib-user-list label="One User List" [users]="oneUserList"></lib-user-list>`,
    context: {
      oneUserList: [{ name: "Test User" }]
    }
  })
  .add("with five users", {
    template: `<lib-user-list label="One User List" [users]="oneUserList"></lib-user-list>`,
    context: {
      oneUserList: [
        { name: "Test User" },
        { name: "Test User" },
        { name: "Test User" },
        { name: "Test User" },
        { name: "Test User" }
      ]
    }
  });

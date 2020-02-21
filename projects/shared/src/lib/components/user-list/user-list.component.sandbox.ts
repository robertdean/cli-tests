import { sandboxOf } from "angular-playground";
import { UserListComponent } from "./user-list.component";
import { IUser } from "../../models";

function getUsers(count): IUser[] {
  const users: IUser[] = [];
  for (let index = 0; index < count; index++) {
    const user: IUser = {
      userId: index.toString(),
      name: "user " + index.toString(),
      email: "user",
      photoUrl: "url"
    };
    users.push(user);
  }
  return users;
}

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
      oneUserList: getUsers(10)
    }
  });

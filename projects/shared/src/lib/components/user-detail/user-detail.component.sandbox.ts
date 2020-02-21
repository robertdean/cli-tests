import { sandboxOf } from "angular-playground";
import { UserDetailComponent } from "./user-detail.component";

export default sandboxOf(UserDetailComponent, {
  label: "feature user component"
})
  .add("default with no user", {
    template: `<lib-user-detail ></lib-user-detail>`
  })
  .add("with user", {
    template: `<lib-user-detail [user]="user"></lib-user-detail>`,
    context: {
      user: { name: "John Smith" }
    }
  });

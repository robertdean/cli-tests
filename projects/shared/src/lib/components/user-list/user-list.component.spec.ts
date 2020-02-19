//import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UserListComponent } from "./user-list.component";

describe("UserListComponent", () => {
  let component: UserListComponent;
  it("should create", () => {
    component = new UserListComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it("should have correct label", () => {
    component = new UserListComponent();
    component.ngOnInit();
    expect(component.label).toBe("User List!");
  });
});

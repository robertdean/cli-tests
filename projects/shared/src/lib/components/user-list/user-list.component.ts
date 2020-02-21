import { Component, OnInit, Input } from "@angular/core";
import { IUser } from "../../models";

@Component({
  selector: "lib-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  constructor() {}
  @Input() users: IUser[] = [];
  @Input() label = "User List!";
  ngOnInit() {}
}

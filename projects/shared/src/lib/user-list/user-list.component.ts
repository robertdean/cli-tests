import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lib-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  constructor() {}
  @Input() label = "User List!";
  ngOnInit() {}
}

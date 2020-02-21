import { Component, OnInit, Input } from "@angular/core";
import { IUser } from "../../models";

@Component({
  selector: "lib-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  @Input() user: IUser = null;
  constructor() {}

  ngOnInit() {}
}

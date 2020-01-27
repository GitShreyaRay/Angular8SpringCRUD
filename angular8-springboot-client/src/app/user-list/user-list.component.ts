import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.users = this.userService.findAll();
  }
}

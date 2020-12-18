import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {logger} from 'codelyzer/util/logger';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: any = [];
  constructor(private userService: UserService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUser();
  }
// tslint:disable-next-line:typedef
loadUser() {
    this.userService.getAllUser().subscribe(
      user => {
        console.log(user);
        this.users = user;
      }
    );
}

  // tslint:disable-next-line:typedef
  onDelete() {

  }
}

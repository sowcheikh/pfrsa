import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  formLogin: FormGroup;
  user: User[];
  loginUserData = {
    email: '',
    password: '',
    profile: 'admin'
  };
  users: User[];

  constructor(private auth: AuthService,
              private router: Router) {
  }

// tslint:disable-next-line:typedef
  loginUser(f: NgForm){
    // console.log(form);

    this.auth.login(this.loginUserData).subscribe(
      res => {
        // tslint:disable-next-line:triple-equals
        if ( res == 'ROLE_ADMIN') {
          this.router.navigate(['/users']);

        } else{
          console.log('non');
        }


      },

      err => console.log(err),
      () => {

        // this.router.navigate(['/admin']);
      }


    );
  }
// tslint:disable-next-line:typedef
  getAllUsers() {
    this.auth.getUser().subscribe(
      res => console.log(res),
      err => console.log(err),
    );
  }
  ngOnInit(): void {
  }

}

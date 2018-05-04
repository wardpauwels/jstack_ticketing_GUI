import {Component, OnInit} from '@angular/core';
import {User} from "../_models";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../_services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit() {
    // reset login status
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loginService.login(this.user)
      .subscribe(
        data => {
          this.router.navigate(['index']);
        },
        error => {
          console.log("failed to login");
        });
  }
}

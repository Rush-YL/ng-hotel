import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  gotoLogin() {
    this.router.navigateByUrl('login');
  }
}

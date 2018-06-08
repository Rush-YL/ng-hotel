import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  backToMain() {
    this.router.navigateByUrl('index');
  }
  editNewReserve() {
    this.router.navigateByUrl('newreservation/:4');
  }
  gotoReservelist() {
    this.router.navigateByUrl('reservelist');
  }
}

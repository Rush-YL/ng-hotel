import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  backToPreorder() {
    this.router.navigateByUrl('preorder/:1');
  }
  seeOrderDetail() {
    this.router.navigateByUrl('detail/:1');
  }
  makeCard() {
    this.router.navigateByUrl('card');
  }
  printDcoument() {
    this.router.navigateByUrl('print');
  }
}

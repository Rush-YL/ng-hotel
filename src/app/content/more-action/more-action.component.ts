import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-action',
  templateUrl: './more-action.component.html',
  styleUrls: ['./more-action.component.scss']
})
export class MoreActionComponent implements OnInit {
  public showPrint: boolean;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.showPrint = false;
  }
  backDetail() {
    this.router.navigateByUrl('detail/:2');
  }
  goFinance() {
    this.router.navigateByUrl('finance');
  }
  goCash() {
    this.router.navigateByUrl('cash');
  }
  goCredit() {
    this.router.navigateByUrl('credit');
  }
  goPrint() {
    this.showPrint = true;
  }
  goReceive() {
    this.router.navigateByUrl('reception');
  }
  goCard() {
    this.router.navigateByUrl('card');
  }
  backMore() {
    this.showPrint = false;
  }
}

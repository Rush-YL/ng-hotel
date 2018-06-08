import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  public isCur: boolean;
  public showRegulation: boolean;
  public showAuth: boolean;
  public onLoading: boolean;
  public showSettle: boolean;
  constructor(
    public router: Router
  ) { }
  ngOnInit() {
    this.isCur = true;
    this.showRegulation = false;
    this.showAuth = false;
    this.onLoading = false;
    this.showSettle = false;
  }
  selectThis() {
    if (this.isCur) {
      this.isCur = false;
    } else {
      this.isCur = true;
    }
  }
  backIncome() {
    this.showRegulation = false;
    this.showSettle = false;
  }
  regulationAct() {
    this.showRegulation = true;
  }
  showAuthCard() {
    this.showAuth = true;
  }
  backRegulation() {
    this.showAuth = false;
  }
  endSettle() {
    this.showSettle = true;
  }
  incomeAct() {
    this.router.navigateByUrl('cash');
  }
  backMain() {
    this.router.navigateByUrl('index');
  }
  backMoreAct() {
    this.router.navigateByUrl('moreacts');
  }
  goPrint() {
    this.router.navigateByUrl('print');
  }
  confirmAuth() {
    this.onLoading = true;
    setTimeout(() => {
      this.onLoading = false;
      this.showAuth = false;
      this.showRegulation = false;
    }, 3500);
  }
}


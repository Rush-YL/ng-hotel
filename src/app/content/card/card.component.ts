import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public showSuccess: boolean;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.showSuccess = false;
  }
  backMoreAct() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
      this.router.navigateByUrl('moreacts');
    }, 3000);
  }
}

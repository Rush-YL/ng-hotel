import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent implements OnInit {
  public items: ItemSelect[];
  public curItem: ItemSelect;
  public showSelectPanel: boolean;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.items = [
      new ItemSelect(1, 'CA-人民币'),
      new ItemSelect(1, '4000-洗衣粉'),
      new ItemSelect(1, '6110-早餐'),
      new ItemSelect(1, '6500-小商品'),
      new ItemSelect(1, '7400-棋牌室')
    ];
    this.curItem = this.items[0];
    this.showSelectPanel = false;
  }
  showSelect() {
    this.showSelectPanel = true;
  }
  checkItem(item) {
    this.curItem = item;
    this.showSelectPanel = false;
  }
  backIncome() {
    this.router.navigateByUrl('finance');
  }
}
export class ItemSelect {
  constructor(
    public id: number,
    public name: string
  ) { }
}

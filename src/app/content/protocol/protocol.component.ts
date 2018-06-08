import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewGoods, GoodsService } from '../../services/goods.service';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {
  public showWeek: boolean;
  public showWeekSearch: boolean;
  public showBack: boolean;
  public showManage: boolean;
  public goods: NewGoods[];
  public curgood: NewGoods;
  public showFilter: boolean;
  public goodsPanel: boolean;
  constructor(
    public router: Router,
    public goodservice: GoodsService
  ) {
    this.goods = this.goodservice.getGoods();
  }

  ngOnInit() {
    this.showWeek = false;
    this.showWeekSearch = false;
    this.showBack = false;
    this.showManage = true;
    this.curgood = this.goods[0];
    this.showFilter = false;
    this.goodsPanel = false;
  }
  showWeekPanel() {
    this.showWeek = true;
  }
  showGoodsPanel() {
    this.showFilter = false;
    this.showBack = false;
    this.showManage = true;
    this.goodsPanel = true;
  }
  getSearch() {
    this.showWeekSearch = true;
  }
  hideWeek() {
    this.showWeek = false;
  }
  hideWeekSearch() {
    this.showWeekSearch = false;
  }
  backProtocol() {
    this.goodsPanel = false;
  }
  hideFilter() {
    this.showFilter = false;
  }
  goodsFilter() {
    if (this.showBack) {
      this.showFilter = true;
    }
  }
  backToMain() {
    this.router.navigateByUrl('index');
  }
  tabChange($event) {
    if ($event.target.nextSibling) {
      $event.target.nextSibling.className = '';
      this.showBack = true;
      this.showManage = false;
    } else if ($event.target.previousSibling) {
      $event.target.previousSibling.className = '';
      this.showBack = false;
      this.showManage = true;
    }
    $event.target.className = 'cur';
  }
  getCurGood(good) {
    this.curgood = good;
  }
}

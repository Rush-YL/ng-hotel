import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent implements OnInit {
  public showList: boolean;
  public showFilter: boolean;
  public Utypes: UType[];
  public curUtype: UType;
  public RStatus: RecpStatus[];
  public curStatu: RecpStatus;
  constructor(
    public router: Router
  ) {
    this.Utypes = [
      new UType(1, '散客&成员'),
      new UType(2, '团队会议'),
      new UType(3, '时租'),
      new UType(4, '自用'),
      new UType(5, '长包'),
      new UType(6, '免费'),
      new UType(7, '今日将离'),
      new UType(8, '所有')
    ];
    this.RStatus = [
      new RecpStatus(1, '全选'),
      new RecpStatus(1, '在住'),
      new RecpStatus(1, '本日结账'),
      new RecpStatus(1, '昨日结账'),
      new RecpStatus(1, '挂账'),
      new RecpStatus(1, '其他')
    ];
  }

  ngOnInit() {
    this.showList = false;
    this.showFilter = false;
    this.curUtype = this.Utypes[0];
    this.curStatu = this.RStatus[1];
  }
  backToMain() {
    this.router.navigateByUrl('index');
  }
  goToNewreserve() {
    this.router.navigateByUrl('newreservation/:4');
  }
  seeReceptionList() {
    this.showList = true;
  }
  showFilterPanel() {
    this.showFilter = true;
  }
  checkThis(utype) {
    this.curUtype = utype;
  }
  getCurStatu(statu) {
    this.curStatu = statu;
  }
  backToList() {
    this.showFilter = false;
  }
  backReception() {
    this.showList = false;
  }
  seeOrderDetail() {
    console.log(666);
    this.router.navigateByUrl('detail/:2');
  }
}
export class UType {
  constructor (
    public id: number,
    public names: string
  ) {}
}
export class RecpStatus {
  constructor(
    public id: number,
    public name: string
  ) {}
}

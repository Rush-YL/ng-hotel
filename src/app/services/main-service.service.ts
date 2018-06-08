import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public mainService: MainService[];
  constructor() { }
  getMainService() {
    return this.mainService = [
      new MainService(1, 'reserve', 'icon-calendar3', '预定', '#FA6774'),
      new MainService(2, 'reception', 'icon-users2', '接待', '#FDCA2E'),
      new MainService(3, 'cash', 'icon-credit-card', '收银帐务', '#3BD1B7'),
      new MainService(4, 'protocol', 'icon-bell3', '礼宾服务', '#4EB8FF'),
      new MainService(5, 'guestroom', 'icon-smile-o', '客房管理', '#FF8B53'),
      new MainService(6, 'finance', 'icon-rmb', '财务管理', '#AA79F6'),
    ];
  }
}
export class MainService {
  constructor(
    public id: number,
    public entry: string,
    public icons: string,
    public itemname: string,
    public bgcolor: string
  ) { }
}

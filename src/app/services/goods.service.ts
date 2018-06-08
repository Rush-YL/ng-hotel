import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  public goods: NewGoods[];
  constructor() { }
  getGoods() {
    return this.goods = [
      new NewGoods(1, 1808, 1, '王强', '出借中', '电子血压计', 'admin', '2018-05-28 12:30:00'),
      new NewGoods(2, 1609, 1, '王凡', '出借中', '房卡', 'admin', '2018-05-28 15:32:25'),
      new NewGoods(3, 1811, 1, '李明', '出借中', '房卡', 'admin', '2018-05-29 10:30:05')
    ];
  }
}
export class NewGoods {
  constructor(
    public id: number,
    public roomnum: number,
    public amount: number,
    public username: string,
    public status: string,
    public goodsname: string,
    public actor: string,
    public time: string
  ) { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservelistService {
  public preorders: PreorderList[];
  constructor() { }
  preorderList() {
    return this.preorders = [
      new PreorderList(1, 'R20000110000150315', '1211房', '03月19日周一入住，03月21日周三 离店', 2, '2018-03-19 12:00:00', '王强', 18605241235, '420010196512026358', 1, '行政套房', 2, '已预定', '未支付', 3200),
      new PreorderList(2, 'R20000110000150318', '1208房', '03月20日周二入住，03月23日周五 离店', 3, '2018-03-20 12:00:00', '邹萍', 18601254655, '420010198810252515', 1, '江景标准房', 3, '已预定', '未支付', 2200),
      new PreorderList(3, 'R20000110000150325', '1220房', '03月24日周六入住 03月25日周日 离店', 1, '2018-03-20 12:00:00', '李雨', 13001254325, '420983199312216525', 1, '行政豪华房', 1, '已预定', '未支付', 1800),
    ];
  }
}
export class PreorderList {
  constructor(
    public id: number,
    public preordernum: string,
    public roomnum: string,
    public livedetail: string,
    public livedays: number,
    public livedatetime: string,
    public username: string,
    public userphone: number,
    public idnumber: string,
    public livepersons: number,
    public roomtype: string,
    public longlive: number,
    public livestatus: string,
    public paystatus: string,
    public totalmoney: number
  ) {}
}

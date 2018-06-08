import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {
  public userinfo: UserInfo;
  constructor() { }
  userInfo() {
    return this.userinfo = new UserInfo(1, '../../assets/images/default_logo.png', 310308, '早班');
  }
}
export class UserInfo {
  constructor(
    public id: number,
    public userlogo: string,
    public usernumber: number,
    public userworktime: string
  ) { }
}

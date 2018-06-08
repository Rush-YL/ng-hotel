import { Injectable } from '@angular/core';

@Injectable()
export class SceneListService {
  public scenes: SceneList[];
  constructor() { }
  sceneList() {
    return this.scenes = [
      new SceneList(1, '../../assets/images/01.jpg', '登录与修改密码', '情景一：登录与修改密码', '请以员工身份（工号310308）上早班， 登录酒店管理系统'),
      new SceneList(2, '../../assets/images/02.jpg', '预定新建', '情景二：预定新建', '王强先生致电莱福特酒店，预定了行政套 房(江景大床套房)，预计抵达时间为 2018年3月19日，预住两晚。'),
      new SceneList(3, '../../assets/images/03.jpg', '预定查询与修改', '情景三：预定查询与修改', '王强先生再次致电莱福特酒店，将订单行 政套房(江景大床套房)改为标准房(街景 房)，预住三晚。'),
      new SceneList(4, '../../assets/images/04.jpg', '散客入住（单人）', '情景四：散客入住（单人）', '公司会员邹萍女士于2018年3月20日入 住酒店豪华房(江景大床房)两晚，请为其 办理入住手续。'),
      new SceneList(5, '../../assets/images/05.jpg', '叫醒服务', '情景五：叫醒服务', '邹萍女士致电前台，需要2018年3月21 日早上8:30的叫醒服务。'),
      new SceneList(6, '../../assets/images/06.jpg', '租借物品服务', '情景六：租借物品服务', '王强先生借电子血压计一个。'),
      new SceneList(7, '../../assets/images/07.jpg', '酒店续住', '情景七：酒店续住', '邹萍女士需续住豪华房(江景大床房)一晚。'),
      new SceneList(8, '../../assets/images/08.jpg', '酒店换房', '情景八：酒店换房', '王强先生投诉房间临街太吵，想换为标准 房(江景房)。'),
      new SceneList(9, '../../assets/images/09.jpg', '账务处理（刷卡入账）', '情景九：账务处理（刷卡入账）', '邹萍于3月21日19时付现金200元用于房 内小酒吧消费。'),
      new SceneList(10, '../../assets/images/10.jpg', '账务处理（消费明细入...', '情景十：账务处理（消费明细入...', '王强先生于3月21日下午在棋牌室消费 360元'),
      new SceneList(11, '../../assets/images/11.jpg', '结账离店', '情景十一：结账离店', '邹萍3月23日上午10点到前台办理结账手 续。')
    ];
  }
}
export class SceneList {
  constructor(
    public id: number,
    public imgs: string,
    public scenetitle: string,
    public title: string,
    public shortcut: string
  ) {}
}

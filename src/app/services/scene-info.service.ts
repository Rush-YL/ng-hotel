import { Injectable } from '@angular/core';

@Injectable()
export class SceneInfoService {
  public sceneinfos: SceneInfo[];
  constructor() { }
  sceneInfo() {
    return this.sceneinfos = [
      new SceneInfo(1, '请以员工身份（工号<span>310308</span>）上早班，登录酒店管理系统（初始密码为6666），然后退出系统。', 'login'),
      new SceneInfo(1, '王强先生致电莱福特酒店，预定了<span>行政套房(江景大床套房)</span>，预计抵达时间为<span>2018年3月19日</span>，预住<span>两晚</span>。', 'index'),
      new SceneInfo(1, '王强先生再次致电莱福特酒店，将订单<span>行政套房(江景大床套房)</span>改为<span>标准间(街景房)</span>，预住<span>三晚</span>。', 'index'),
      new SceneInfo(1, '公司会员邹萍女士于<span>2018年3月20日</span>入住酒店<span>豪华房(江景大床房)两晚</span>，请为其办理入住手续。', 'index'),
      new SceneInfo(1, '邹萍女士致电前台，需要<span>2018年3月21日早上8:30的叫醒服务</span>。', 'index'),
      new SceneInfo(1, '王强先生<span>借电子血压计一个</span>。', 'index'),
      new SceneInfo(1, '邹萍女士需<span>续住豪华房(江景大床房)一晚</span>。', 'index'),
      new SceneInfo(1, '王强先生投诉房间临街太吵，想换为<span>标准房(江景房)</span>。', 'index'),
      new SceneInfo(1, '邹萍于<span>3月21日19时付现金200元用于房内小酒吧消费</span>。', 'index'),
      new SceneInfo(1, '王强先生于<span>3月21日下午在棋牌室消费360元（其中棋牌室促销活动券240元）</span>。', 'index'),
      new SceneInfo(1, '邹萍3月23日上午10点到前台办理结账手续。', 'index'),
    ];
  }
}
export class SceneInfo {
  constructor(
    public sceneid: number,
    public sceneword: string,
    public nextentry: string
  ) { }
}


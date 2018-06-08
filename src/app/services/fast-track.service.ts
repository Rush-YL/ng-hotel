import { Injectable } from '@angular/core';

@Injectable()
export class FastTrackService {
  public fasttracks: FastTrack[];
  constructor() { }
  fastTrack() {
    return this.fasttracks = [
      new FastTrack('scene/:4', 'icon-user4', '散客步入', 'icon-angle-right'),
      new FastTrack('scene/:2', 'icon-edit-3', '新建预定', 'icon-angle-right'),
      new FastTrack('scene/:3', 'icon-compass2', '自助入住列表', 'icon-angle-right'),
      new FastTrack('scene/:4', 'icon-file2', '接待详单', 'icon-angle-right'),
      new FastTrack('scene/:5', 'icon-file-text4', '预定详单', 'icon-angle-right'),
      new FastTrack('scene/:6', 'icon-sidebar', '读取房卡', 'icon-angle-right')
    ];
  }
}
export class FastTrack {
  constructor(
    public entrylink: string,
    public icontype: string,
    public trackname: string,
    public iconentry: string
  ) {}
}

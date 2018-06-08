import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { SceneList, SceneListService } from '../../services/scene-list.service';
import { SceneInfo, SceneInfoService } from '../../services/scene-info.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  public scenelist;
  public curscene;
  public sceneinfo;
  public scene;
  public sceneport: number;
  constructor(
    private sceneListService: SceneListService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private sceneInfoService: SceneInfoService
  ) {
    this.scenelist = this.sceneListService.sceneList();
    this.sceneinfo = this.sceneInfoService.sceneInfo();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        const ids: number = params.id.slice(1) - 1;
        this.curscene = this.scenelist[ids];
        this.scene = this.sceneinfo[ids];
        this.sceneport = ids;
      }
    );
  }
  backIndex() {
    this.router.navigateByUrl('main');
  }
  goToMain() {
    this.router.navigateByUrl('' + this.sceneinfo[this.sceneport].nextentry);
  }
}

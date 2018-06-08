import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SceneList, SceneListService } from '../../services/scene-list.service';
@Component({
  selector: 'app-scenelist',
  templateUrl: './scenelist.component.html',
  styleUrls: ['./scenelist.component.scss']
})
export class ScenelistComponent implements OnInit {
  public scenelists;
  constructor(private sceneListService: SceneListService, public router: Router) {
    this.scenelists = this.sceneListService.sceneList();
  }
  ngOnInit() {
  }
  sceneNav(scenelists) {
    this.router.navigateByUrl('scene/:' + scenelists.id);
  }
}


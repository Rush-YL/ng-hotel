import { Component, OnInit } from '@angular/core';
import { SideToggleService } from '../services/side-toggle.service';
import { Router } from '@angular/router';
import { UserInfo, UserInfoService } from '../services/user-info.service';
import { FastTrack, FastTrackService } from '../services/fast-track.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public showStatus = false;
  public userinfo: UserInfo;
  public fasttracks: FastTrack[];
  constructor(
    public sideTogleService: SideToggleService,
    public userInfoService: UserInfoService,
    public fastTrackService: FastTrackService,
    public router: Router
  ) {
    this.userinfo = userInfoService.userInfo();
    this.fasttracks = fastTrackService.fastTrack();
  }
  ngOnInit() {
    this.sideTogleService.showStatus.subscribe((value) => {
      this.showStatus = value;
      if (value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }
  toggleSidebar(): void {
    this.showStatus = false;
    document.body.style.overflow = 'auto';
  }
  quickNav(fasttrack) {
    this.router.navigateByUrl(fasttrack.entrylink);
    this.showStatus = false;
    document.body.style.overflow = 'auto';
  }
}

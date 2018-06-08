import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SideToggleService } from '../../services/side-toggle.service';
import { MainService, MainServiceService } from '../../services/main-service.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @Output() showStatus: boolean;
  public showStuats: false;
  public mainData: MainService[];
  constructor(
    public sideTogleService: SideToggleService,
    private mainSerice: MainServiceService,
    public router: Router
  ) {
    this.mainData = this.mainSerice.getMainService();
  }
  ngOnInit() {

  }
  toggleSidebar(): void {
    this.sideTogleService.showStatus.next(true);
  }
  goNextEntry(params) {
    this.router.navigateByUrl(params.entry);
  }
  backMain() {
    this.router.navigateByUrl('main');
  }
}

import { Component, OnInit, Input, Output } from '@angular/core';
import { SideToggleService } from '../services/side-toggle.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showStatus: boolean;
  public showStuats: false;
  constructor(public sideTogleService: SideToggleService) { }
  ngOnInit() {
  }
  toggleSidebar(): void {
    this.sideTogleService.showStatus.next(true);
  }
}

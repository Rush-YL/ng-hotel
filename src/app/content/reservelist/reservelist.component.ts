import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreorderList, ReservelistService } from '../../services/reservelist.service';
@Component({
  selector: 'app-reservelist',
  templateUrl: './reservelist.component.html',
  styleUrls: ['./reservelist.component.scss']
})
export class ReservelistComponent implements OnInit {
  public showReservelist: boolean;
  public showCardSearch: boolean;
  public preorders: PreorderList[];
  public curResult: boolean;
  public curstep: boolean;
  public searchResult: PreorderList;
  public showsearch: boolean;
  constructor(
    public router: Router,
    public reservelistService: ReservelistService
  ) {
    this.preorders = this.reservelistService.preorderList();
    this.searchResult = this.preorders[0];
  }

  ngOnInit() {
    this.showReservelist = true;
    this.showCardSearch = false;
    this.showsearch = false;
  }
  setCurTap($event) {
    $event.target.className = 'cur';
    if ($event.target.previousSibling) {
      $event.target.previousSibling.className = '';
    } else if ($event.target.nextSibling) {
      $event.target.nextSibling.className = '';
    }
    switch ($event.target.innerHTML) {
      case '预定号管理':
        this.showReservelist = true;
        this.showCardSearch = false;
        this.curResult = false;
        this.curstep = true;
        break;
      case '证件查订单':
        this.showReservelist = false;
        this.showCardSearch = true;
        this.curResult = false;
        this.curstep = true;
        setTimeout(
          () => {
          this.curResult = true;
          this.curstep = false;
          } , 1500);
        break;
      default:
        this.showReservelist = true;
        this.showCardSearch = false;
        this.curResult = false;
        this.curstep = true;
    }
  }
  seePreorderDetail(preorder) {
    this.router.navigateByUrl('preorder/:' + preorder.id);
  }
  backToReserve() {
    this.router.navigateByUrl('reserve');
  }
  goSearch() {
    this.showsearch = true;
  }
  hideSearch() {
    this.showsearch = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PreorderList, ReservelistService } from '../../services/reservelist.service';
@Component({
  selector: 'app-preorder',
  templateUrl: './preorder.component.html',
  styleUrls: ['./preorder.component.scss']
})
export class PreorderComponent implements OnInit {
  public preorders: PreorderList[];
  public preorder: PreorderList;
  public showPrint: boolean;
  public showScan: boolean;
  public showId: number;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public reservelistService: ReservelistService
  ) {
    this.preorders = this.reservelistService.preorderList();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        const ids: number = params.id.slice(1) - 1;
        if (ids === -1) {
          this.preorder = this.preorders[ids + 1];
        } else {
          this.preorder = this.preorders[ids];
        }
        this.showId = params.id.slice(1) * 1;
      }
    );
    this.showPrint = false;
    this.showScan = false;
  }
  backNewreservation(preorder) {
    this.router.navigateByUrl('newreservation/:' + preorder.id);
  }
  confirmCheckIn() {
    this.showPrint = true;
    setTimeout(() => {
      this.showPrint = false;
      this.router.navigateByUrl('confirm');
    }, 1500);
  }
  documentScanning() {
    this.showScan = true;
    console.log(666);
  }
  cancelOrder() {
    this.router.navigateByUrl('index');
  }
  backPreorder() {
    this.showPrint = false;
    this.showScan = false;
  }
  backWhereFrom() {
    console.log(typeof this.showId);
    if (this.showId === 0) {
      this.router.navigateByUrl('newreservation');
    } else {
      this.router.navigateByUrl('reservelist');
    }
  }
}

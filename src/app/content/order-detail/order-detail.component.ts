import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Room, RoomServiceService } from '../../services/room-service.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public roomInfo: Room[];
  public showStay: boolean;
  public showRoomChange: boolean;
  public showCard: boolean;
  public pageFrom: number;
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public roomService: RoomServiceService
  ) {
    this.roomInfo = this.roomService.getRoom();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        const ids: number = params.id.slice(1);
        this.pageFrom = ids;
      }
    );
    this.showStay = false;
    this.showRoomChange = false;
    this.showCard = false;
  }
  roomStay() {
    this.showStay = true;
  }
  backDetail() {
    this.showStay = false;
    this.showRoomChange = false;
    this.showCard = false;
  }
  changeRoom() {
    this.showRoomChange = true;
  }
  showAuCard() {
    this.showRoomChange = false;
    this.showCard = true;
    setTimeout(() => {
      this.backDetail();
    }, 2000);
  }
  backMain() {
    this.router.navigateByUrl('index');
  }
  showMoreAct() {
    this.router.navigateByUrl('moreacts');
  }
  backToWhereFrom() {
    const that = this;
    const thatPages = that.pageFrom * 1;
    switch (thatPages) {
      case 1:
        that.router.navigateByUrl('confirm');
        break;
      case 2:
        that.router.navigateByUrl('reception');
        break;
      case 3:
        that.router.navigateByUrl('');
        break;
      default:
        console.log(that.router);
    }
  }
}

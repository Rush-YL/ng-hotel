import { Component, OnInit, Injectable } from '@angular/core';
import { Room, RoomType, RoomNumber, RoomServiceService } from '../../services/room-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
const I18N_VALUES = {
  'zh-cn': {
    weekdays: ['一', '二', '三', '四', '五', '六', '日'],
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  }
};
@Injectable()
export class I18n {
  language = 'zh-cn';
}
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
export class NgbdDatepickerI18n {
  model1;
  model2;
}
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
@Component({
  selector: 'app-newreservation',
  templateUrl: './newreservation.component.html',
  styleUrls: ['./newreservation.component.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})

export class NewreservationComponent implements OnInit {
  public users: UserType[];
  public selecteduser: UserType;
  public selectModule: string;
  public roomModule: string;
  public curType: string;
  public dbtypes: UserType[];
  public rooms: Room[];
  public roomInfo: string;
  public totalmoney: number;
  public dateselect: string;
  public modelShow1: string;
  public modelShow2: string;
  public fromDate: NgbDateStruct;
  public toDate: NgbDateStruct;
  public dateType: string;
  public bgtime: string;
  public edtime: string;
  public roomShow: string;
  public roomtypes: RoomType[];
  public roomnumbers: RoomNumber[];
  public selectedRoom: number;
  public livedays: number;
  public roomPerMoney: number;
  public canMinus: boolean;
  public canPlus: boolean;
  public confRoom: string;
  public confRoomType: string;
  public showTips: boolean;
  public model1: any;
  public model2: any;
  public pageFrom: number;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public roomServiceService: RoomServiceService
  ) {
    this.rooms = roomServiceService.getRoom();
    this.roomtypes = roomServiceService.roomType();
    this.roomnumbers = roomServiceService.roomNumber();
  }

  ngOnInit() {
    this.initUserType();
    this.initDBType();
    this.selectModule = 'none';
    this.curType = '普通预定';
    this.roomModule = 'none';
    this.selecteduser = this.users[0];
    this.roomInfo = '行政套房，1间';
    this.totalmoney = 1600;
    this.dateselect = 'none';
    this.dateType = 'begin';
    this.bgtime = '2018-5-15';
    this.edtime = '2018-5-16';
    this.roomShow = 'none';
    this.selectedRoom = 1202;
    this.livedays = 1;
    this.roomPerMoney = 1600;
    this.canMinus = false;
    this.canPlus = true;
    this.confRoom = 'none';
    this.confRoomType = '行政套房';
    this.showTips = false;
    this.activatedRoute.params.subscribe(
      (params) => {
        const ids: number = params.id.slice(1);
        this.pageFrom = ids * 1;
      }
    );
  }
  initUserType() {
    return this.users = [
      new UserType(1, '非会员'),
      new UserType(2, '个人会员'),
      new UserType(3, '公司会员'),
      new UserType(4, '网络/旅行社')
    ];
  }
  initDBType() {
    return this.dbtypes = [
      new UserType(1, '普通预定'),
      new UserType(2, '网络担保预定'),
      new UserType(3, '公司挂账预定')
    ];
  }
  backRserve() {
    if (this.pageFrom === 4) {
      this.router.navigateByUrl('reserve');
    } else {
      this.router.navigateByUrl('preorder/:' + this.pageFrom);
    }
  }
  getCurrentLi(user: UserType): void {
    this.selecteduser = user;
  }
  getDBType() {
    this.selectModule = 'block';
  }
  hideSelect() {
    this.selectModule = 'none';
  }
  selectType(args) {
    this.curType = args.type;
  }
  roomTypeSelect() {
    this.roomModule = 'block';
  }
  roomSelect() {
    this.roomShow = 'block';
  }
  backReservation() {
    this.roomModule = 'none';
    this.dateselect = 'none';
    this.roomShow = 'none';
    this.confRoom = 'none';
  }
  selectThisRoom(args) {
    for (let i = 0; i < this.rooms.length; i++) {
      this.rooms[i].curcheck = false;
    }
    if (args.curcheck) {
      args.curcheck = false;
      this.totalmoney = 0;
      this.roomPerMoney = 0;
    } else {
      args.curcheck = true;
      this.totalmoney = args.averageprice * args.roomselect * this.livedays;
      this.confRoomType = args.roomtype;
      this.roomPerMoney = args.averageprice;
      console.log(this.totalmoney);
    }
  }
  minusSelect(args) {
    if (args.roomselect === 1) {
      this.canMinus = false;
      return false;
    }
    this.canMinus = true;
    args.roomselect -= 1;
    this.totalmoney = args.roomselect * args.averageprice * this.livedays;
  }
  plusSelect(args) {
    if (args.roomselect >= args.canorder) {
      this.canPlus = false;
      return false;
    }
    this.canPlus = true;
    args.roomselect += 1;
    this.totalmoney = args.roomselect * args.averageprice * this.livedays;
  }
  setBeginTime() {
    this.dateselect = 'block';
    this.modelShow1 = 'block';
    this.modelShow2 = 'none';
    this.dateType = 'begin';
  }
  setEndTime() {
    this.dateselect = 'block';
    this.modelShow1 = 'none';
    this.modelShow2 = 'block';
    this.dateType = 'end';
  }
  getCurRoomNum($event) {
    if ($event.target.tagName === 'EM') {
      for (let i = 0; i < $event.path[1].children.length; i++) {
        $event.path[1].children[i].className = '';
      }
      $event.target.className = 'cur';
      this.selectedRoom = $event.target.innerHTML;
    } else {
      return false;
    }
  }
  onDateSelection(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    if (this.dateType === 'begin') {
      this.bgtime = '' + date.year + '-' + date.month + '-' + date.day + '';
      if (this.edtime <= this.bgtime) {
        this.edtime = this.bgtime;
        this.livedays = 1;
      }
    } else if (this.dateType === 'end') {
      this.edtime = '' + date.year + '-' + date.month + '-' + date.day + '';
      // this.livedays = parseInt()
      this.livedays = (new Date(this.edtime).getTime() - new Date(this.bgtime).getTime()) / 1000 / 60 / 60 / 24;
      if (this.edtime <= this.bgtime) {
        this.edtime = this.bgtime;
        this.livedays = 1;
      }
    }
    this.totalmoney *= this.livedays;
    console.log(this.livedays);
  }
  commitRoomSelect() {
    this.roomModule = 'none';
    this.roomInfo = '';
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].curcheck) {
        console.table(this.rooms[i]);
        this.roomInfo += '' + this.rooms[i].roomtype + '，' + this.rooms[i].roomselect + '间';
      }
    }
  }
  toggleCurRoom(currrrom) {
    const divs = document.getElementsByClassName('room_wall');
    for (let i = 0; i < this.roomtypes.length; i++) {
      this.roomtypes[i].iscurroom = false;
      divs[i].className = 'room_wall';
    }
    currrrom.iscurroom = true;
    divs[currrrom.id - 1].className = 'room_wall cur';
  }
  commitOrder() {
    this.confRoom = 'block';
  }
  gotoPreOrder() {
    this.showTips = true;
    setTimeout(() => {
      this.showTips = false;
      this.router.navigateByUrl('preorder/:0');
    }, 500);
  }
}
export class UserType {
  constructor(
    public id: number,
    public type: string
  ) {

  }
}

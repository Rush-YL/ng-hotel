import { Component, OnInit} from '@angular/core';
import { RoomType, RoomNumber, RoomServiceService } from '../../services/room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guestroom',
  templateUrl: './guestroom.component.html',
  styleUrls: ['./guestroom.component.scss']
})
export class GuestroomComponent implements OnInit {
  public roomtypes: RoomType[];
  public roomnumbers: RoomNumber[];
  public selectedRoom: number;
  constructor(
    public router: Router,
    public roomServiceService: RoomServiceService
  ) {
    this.roomtypes = roomServiceService.roomType();
    this.roomnumbers = roomServiceService.roomNumber();
  }

  ngOnInit() {
    this.selectedRoom = 1202;
  }
  backReservation() {
    console.log(this);
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
  toggleCurRoom(currrrom) {
    const divs = document.getElementsByClassName('room_wall');
    for (let i = 0; i < this.roomtypes.length; i++) {
      this.roomtypes[i].iscurroom = false;
      divs[i].className = 'room_wall';
    }
    currrrom.iscurroom = true;
    divs[currrrom.id - 1].className = 'room_wall cur';
  }
}

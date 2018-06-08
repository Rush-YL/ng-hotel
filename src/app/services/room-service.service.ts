import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  public rooms: Room[];
  public roomcleanliness: RoomType[];
  public roomnums: RoomNumber[];
  constructor() { }
  getRoom() {
    return this.rooms = [
      new Room(1, '行政尊贵套房', 6, 5, 2000.00, 40, 2700.00, false, 1),
      new Room(2, '行政套房', 4, 0, 1600.00, 27, 1800.00, false, 1),
      new Room(3, '行政豪华房', 4, 0, 1800.00, 12, 2000.00, false, 1),
      new Room(4, '豪华房', 1, 6, 1700.00, 3, 1900.00, false, 1),
      new Room(5, '江景标准房', 2, 5, 740.00, 12, 800.00, false, 1),
      new Room(6, '街景标准房', 2, 5, 740.00, 12, 800.00, false, 1),
      new Room(7, '连通房', 7, 8, 1800.00, 3, 2000.00, false, 1)
    ];
  }
  roomType() {
    return this.roomcleanliness = [
      new RoomType(1, '空干净', true),
      new RoomType(2, '住干净', false),
      new RoomType(3, '脏房', false)
    ];
  }
  roomNumber() {
    return this.roomnums = [
      new RoomNumber(1, [1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222], true),
      new RoomNumber(2, [1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322], false),
      new RoomNumber(3, [1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422], false),
    ];
  }
}
export class Room {
  constructor(
    public id: number,
    public roomtype: string,
    public canlivefor: number,
    public hasorder: number,
    public averageprice: number,
    public canorder: number,
    public rackrate: number,
    public curcheck: boolean,
    public roomselect: number
  ) {}
}
export class RoomType {
  constructor(
    public id: number,
    public cleanliness: string,
    public iscurroom: boolean
  ) {}
}
export class RoomNumber {
  constructor(
    public dirtynum: number,
    public roomNum: Array<number>,
    public curshow: boolean
  ) {}
}

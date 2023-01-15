import {MeetingResource} from './meetingResource';

function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize:number):Array<T> {
 let bigRooms: Array<T> = [];

 rooms.forEach(r => {
    if(r.capacity > minSize) {
        bigRooms.push(r);
    }
 });
 return bigRooms;
}
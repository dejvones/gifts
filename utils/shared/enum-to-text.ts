import { Event } from "../../models/gifts"

export function EventToString(selection: Event) : string {
    switch(selection){
        case 0:
            return 'Birthday';
        case 1:
            return 'Name-day';
        case 2:
            return 'Christmas';
        case 3:
            return 'Valentine';
        case 4:
            return 'Anniversary';
        default:
            return '';
    }
}
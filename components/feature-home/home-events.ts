import { Event } from "../../models/gifts"

export interface HomeYear{
    year: number,
    content: HomeEvent[]
}

export interface HomeEvent {
    id: string,
    type: Event
}
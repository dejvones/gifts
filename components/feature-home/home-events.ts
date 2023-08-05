import { Event } from "../../models/gifts"

export interface HomeYear{
    year: number,
    content: HomeEvent[]
}

interface HomeEvent {
    id: string,
    type: Event
}
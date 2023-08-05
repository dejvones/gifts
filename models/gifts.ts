export interface Gift {
    id: string,
    title: string,
    description: string,
    year: number,
    event: Event
}

export enum Event {
    birthday,
    nameday,
    christmas,
    valentine,
    anniversary
}
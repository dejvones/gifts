import { Gift } from "./gifts";

export interface Person {
    id?: string,
    name: string,
    gifts: Gift[]
}
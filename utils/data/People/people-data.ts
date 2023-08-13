import realm from '../realm-database';
import {UpdateMode} from 'realm';
import { Person } from "../../../models/person";
import { PersonSchema } from '../realm-schema';


const DATA_NAME = 'Person'
export function insertPerson(person: Person){
    realm.write(() => {
        realm.create(DATA_NAME, {...person, _id: new Realm.BSON.UUID().toHexString()});
    })
}

export function updatePerson(person: Person){
    realm.write(() => {
        realm.create(DATA_NAME, {...person, _id: person.id}, UpdateMode.Modified)
    })
}

export function getPerson(id : string) : Person | undefined {
    const result = realm.objectForPrimaryKey(DATA_NAME, new Realm.BSON.UUID(id).toHexString()) as PersonSchema | undefined;
    if (!result) return undefined;
    return mapPerson(result);
}

export function getPeople() : Person[]{
    const people : PersonSchema[] = Array.from(realm.objects(DATA_NAME));
    return people.map(p => mapPerson(p));
}

export function removePerson(id : string){
    const result = realm.objectForPrimaryKey(DATA_NAME, new Realm.BSON.UUID(id).toHexString());
    if (!result) return;
    realm.write(() => {
        realm.delete(result);
    })
}

function mapPerson(person : PersonSchema) : Person {
    return ({
        id: new Realm.BSON.UUID(person._id).toHexString(),
        name: person.name,
        gifts: person.gifts.map(g => ({
            id: new Realm.BSON.UUID(g._id).toHexString(),
            title: g.title,
            description: g.description ?? '',
            event: g.event,
            year: g.year
        }))
    })
}
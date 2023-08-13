import Realm from 'realm';

export class PersonSchema extends Realm.Object<PersonSchema> {
    _id!: Realm.BSON.UUID;
    name!: string;
    gifts!: Realm.List<GiftSchema>;

    static schema = {
      name: 'Person',
      properties: {
        _id: 'string',
        name: 'string',
        gifts: 'Gift[]'
      },
      primaryKey: '_id'
    };
}

export class GiftSchema extends Realm.Object<GiftSchema> {
    _id!: Realm.BSON.UUID;
    title!: string;
    description?: string;
    year!: number;
    event!: number;

    static schema = {
        name: 'Gift',
        properties: {
            _id: 'string',
            title: 'string',
            description: 'string?',
            year: 'int',
            event: 'int'
        },
        primaryKey: '_id'
    }
}
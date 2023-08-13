import Realm from 'realm';
import { GiftSchema, PersonSchema } from "./realm-schema";

export default new Realm({schema: [PersonSchema, GiftSchema]})
import { View } from "react-native";
import { Header } from "../shared/header";
import { Button, } from "@rneui/themed";
import { useEffect, useState } from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { GInput } from "../shared/g-input";
import { Person } from "../../models/person";
import { Delete } from "../shared/delete";
import { getPerson, insertPerson, removePerson, updatePerson } from "../../utils/data/People/people-data";


let actualPerson : Person | undefined;
export function HomePersonEdit({route, navigation} : any): JSX.Element {
    const {id} = route.params;

    const [defaultName, setDefaultName] = useState<string | undefined>();
    const [name, setName] = useState<string | undefined>();
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [saving, setSaving] = useState<boolean>(false);

    useEffect(() => {
        if (id){
            actualPerson = getPerson(id) ?? {name: '', id: '', gifts: []};
            setDefaultName(actualPerson.name);
        }
        else{
            actualPerson = {name: '', id: '', gifts: []};
        }
        nameChanged(actualPerson.name);
    }, []);

    function goBack(): void {
        navigation.goBack();
    }

    function nameChanged(text: string): void {
        setName(text);
        if (text.length < 4)
            setErrorMsg('The name must have at least 4 characters.');
        else
            setErrorMsg(undefined);
    }

    async function save(): Promise<void> {
        if (!actualPerson || saving) return;
        setSaving(true);
        actualPerson = {...actualPerson, name: name ?? ''};
        actualPerson.id ? updatePerson(actualPerson) : insertPerson(actualPerson);

        await waitToSync();
    }

    async function waitToSync(): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 250)).then(() => {
            setSaving(false);
            navigation.goBack();
        });
    }

    async function deletePerson() : Promise<void>{
        if (!actualPerson || saving || !(actualPerson.id)) return;
        setSaving(true);

        removePerson(id)
        await waitToSync();
    }

    return (
        <View>
            <Header text={id ? `Edit ${defaultName}` : 'New person'} goBack={goBack} element={
                id? <Delete loading={saving} onPress={deletePerson} /> : undefined
            }/>
            <View>
                <GInput label="Name" placeholder="girlfriend" errorMsg={errorMsg} onChangeText={nameChanged} value={name}/>
                <Button loading={saving} buttonStyle={GlobalStyles.addButton} disabled={errorMsg !== undefined} onPress={save} title='Save'/>
            </View>
        </View>
    )
}


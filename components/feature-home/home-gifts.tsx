import { StyleSheet, View } from "react-native";
import { Header } from "../shared/header";
import { EventToString } from "../../utils/shared/enum-to-text";
import { Button, Icon, ListItem, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Gift } from "../../models/gifts";
import { GlobalStyles } from "../../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../styles/colors";


const TESTDATA = [{
    id: '1',
    title: 'trickoD',
    description: 'eqrweqfd safwef asdf wef sdfawef we f',
    year: 2022,
    event: 2
},
{
    id: '2',
    title: 'kabelkaD',
    description: 's dfawsef wdsaf sfwef dsacsdceqw fqw fwqef sdf as',
    year: 2022,
    event: 2
},
{
    id: '3',
    title: 'vonavkaD',
    description: '',
    year: 2022,
    event: 2
},
{
    id: '4',
    title: 'pena na holeniD',
    description: 'sdf asdf we fw sdf',
    year: 2022,
    event: 2
},
{
    id: '5',
    title: 'knizkaD',
    description: 'a sdfwef wapf sodijf ewof uoawjf lwjpef wjf eiowef uwpefj spfjwaf epad dspafsd oifuwe pewo fosjdf pwjef pawfsd ',
    year: 2022,
    event: 2
}]

export function HomeGifts({ route, navigation} : any ) : JSX.Element {
    const [gifts, setGifts] = useState<Gift[]>([]);
    const {id, name, eventType, year} = route.params;

    useEffect(() => {
        setGifts(TESTDATA);
    }, [])

    function goBack(): void {
        navigation.goBack();
    }

    function editGift(id : string) : void{
        navigation.navigate('h-GiftEdit');
    }

    function addGift(): void {
        navigation.navigate('h-GiftAdd');
    }

    return(
        <View>
            <Header text={`${name}'s ${EventToString(eventType)}, ${year}`} goBack={goBack} />
            <View style={GlobalStyles.list}>
            <Button buttonStyle={GlobalStyles.addButton} titleStyle={{color: Colors.bgMain}} onPress={() => addGift()} icon={
                <Icon name='plus' type='material-community' color={Colors.bgMain} iconStyle={styles.icon}/>
            }>Add new gift</Button>
            {
                gifts.map((gift, index) => (
                    <TouchableOpacity key={index} onPress={() => editGift(gift.id)}>
                    <ListItem containerStyle={GlobalStyles.listItem}>
                        <ListItem.Content>
                            <ListItem.Title style={GlobalStyles.text}>
                                {gift.title}
                            </ListItem.Title>
                            <View>
                                <Text style={GlobalStyles.text}>{gift.description}</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                    </TouchableOpacity>

                ))
            }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30
    },
})
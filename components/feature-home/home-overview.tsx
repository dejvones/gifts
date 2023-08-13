import { Button, Icon, ListItem, Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"
import { GlobalStyles } from "../../styles/globalStyles"
import { useEffect, useRef, useState } from "react"
import { Person } from "../../models/person"
import { Select } from "../shared/select"
import { HomeEvent, HomeYear } from "./home-events"
import { Colors } from "../../styles/colors"
import { EventToString } from "../../utils/shared/enum-to-text"
import { TouchableOpacity } from "react-native-gesture-handler"
import { getPeople } from "../../utils/data/People/people-data"
import { useIsFocused } from "@react-navigation/native"

let selectedPerson : Person | undefined; 

export function HomeOverview({ navigation} : any ) : JSX.Element {
    const [people, setPeople] = useState<Person[]>([]);
    const [gifts, setGifts] = useState<HomeYear[]>([]);

    const isFocused = useIsFocused();
    const selectRef = useRef<any>();

    useEffect(() => {
        setData();
    }, [isFocused])

    function setData(): void {
        let data : Person[] = getPeople();
        setPeople(data);

        if (data.length > 0 && (!selectedPerson || !data.find(p => p.id === selectedPerson?.id))){
            selectedPerson = data[0];
            selectRef.current.setNewSelect(0);
        }
        else if (data.length === 0){
            selectedPerson = undefined;
            selectRef.current.setNewSelect(0);
        }
    
        setGifts(findGifts());
    }

    function findGifts(): HomeYear[] {
        if (!selectedPerson?.gifts) return [];

        const allGifts = selectedPerson.gifts;
        const grouped : HomeYear[] = [];

        allGifts.forEach(gift => {           
            const newValue = {id: gift.id, type: gift.event};
            const find = grouped.find(g => g.year === gift.year);

            if (find){
                if (!find.content.find(e => e.type === gift.event)) find.content.push(newValue);
            }
            else {
                grouped.push({
                    year: gift.year,
                    content: [newValue]
                })
            }
        });

        return grouped.sort((a,b) => b.year - a.year).map(g => ({
            ...g,
            content: g.content.sort((a,b) => EventToString(a.type).localeCompare(EventToString(b.type)))
        }));
    }

    function selectedChanged(id: string): void {
        selectedPerson = people.find(p => p.id === id);
        setGifts(findGifts());
    }

    function eventSelected(event: HomeEvent, year: number) : void{
        navigation.navigate('h-Gifts', {
            id: event.id,
            name: selectedPerson!.name,
            eventType: event.type,
            year: year
        });
    }

    function addGift(): void {
        navigation.navigate('h-GiftAdd');
    }

    function addPerson(): void {
        navigation.navigate('h-PersonEdit', {
            id: undefined
        });
    }

    function editPerson(): void {
        navigation.navigate('h-PersonEdit', {
            id: selectedPerson?.id
        })
    }

    return(
        <View>
            <Text style={GlobalStyles.header}>Gifted people </Text>
            <View style={[GlobalStyles.rowFlex, styles.group]}>
                <Button buttonStyle={[GlobalStyles.addButton, styles.groupButton]} onPress={() => addPerson()} containerStyle={styles.groupButtonContainer}>
                    <View>
                        <Icon name='account-plus' type='material-community' color={Colors.bgMain} iconStyle={GlobalStyles.icon}/>
                        <Text style={{color: Colors.bgMain}}>New person</Text>
                    </View>
                </Button>
                <Button buttonStyle={[styles.groupButton, styles.secondButton]} onPress={() => editPerson()} containerStyle={styles.groupButtonContainer}>
                    <View>
                        <Icon name='account-edit' type='material-community' color={Colors.primary} iconStyle={GlobalStyles.icon}/>
                        <Text style={{color: Colors.primary}}>Edit person</Text>
                    </View>
                </Button>
                <Button buttonStyle={[GlobalStyles.addButton, styles.groupButton]} onPress={() => addGift()} containerStyle={styles.groupButtonContainer}>
                    <View>
                        <Icon name='plus' type='material-community' color={Colors.bgMain} iconStyle={GlobalStyles.icon}/>
                        <Text style={{color: Colors.bgMain}}>New gift</Text>
                    </View>
                </Button>
            </View>
            <View style={[GlobalStyles.rowFlex, styles.select]}>
                <Text style={styles.selectText}>Gifts for:</Text>
                <Select ref={selectRef} displayData={people.map(p => p.name)} valueData={people.map(p => p.id ?? '')} onSelect={selectedChanged}/>
            </View>
            <View style={GlobalStyles.list}>
                {gifts.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.listYear}>{item.year}</Text>
                        {item.content.map((event, i) => (
                            <TouchableOpacity key={i} onPress={() => eventSelected(event, item.year)}>
                                <ListItem containerStyle={GlobalStyles.listItem}>
                                    <ListItem.Content>
                                        <ListItem.Title style={GlobalStyles.text}>
                                            {EventToString(event.type)}
                                        </ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron color={Colors.text} iconStyle={GlobalStyles.icon}/>
                                </ListItem>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selectText: {
        color: Colors.text,
        alignSelf: 'center',
        paddingBottom: 5
    },
    select: {
        paddingHorizontal: 10,
    },
    listYear: {
        color: Colors.primary,
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 10
    },
    mainButton: {
        marginBottom: 0
    },

    groupButton: {
        borderRadius: 0,
        marginBottom: 0
    },
    groupButtonContainer: {
        width: '33.34%',
        borderRadius: 0,
    },
    secondButton: {
        backgroundColor: Colors.bgMain,
    },
    group: {
        borderWidth: 1,
        borderColor: Colors.primary,
        marginBottom: 10,
        marginTop: -10,
    }
})
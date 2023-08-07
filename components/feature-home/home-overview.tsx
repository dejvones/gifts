import { Button, ButtonGroup, Icon, ListItem, Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"
import { GlobalStyles } from "../../styles/globalStyles"
import { useEffect, useState } from "react"
import { Person } from "../../models/person"
import { Select } from "../shared/select"
import { HomeEvent, HomeYear } from "./home-events"
import { Colors } from "../../styles/colors"
import { EventToString } from "../../utils/shared/enum-to-text"
import { TouchableOpacity } from "react-native-gesture-handler"


const TESTDATA = [
    {
        id: '1',
        name: 'Janicka',
        gifts: [
            {
                id: '1',
                title: 'tricko',
                description: '',
                year: 2022,
                event: 1
            },
            {
                id: '2',
                title: 'kabelka',
                description: '',
                year: 2022,
                event: 2
            },
            {
                id: '3',
                title: 'vonavka',
                description: '',
                year: 2022,
                event: 2
            },
            {
                id: '4',
                title: 'pena na holeni',
                description: '',
                year: 2021,
                event: 1
            },
            {
                id: '5',
                title: 'knizka',
                description: '',
                year: 2021,
                event: 3
            }
        ]
    },
    {
        id: '2',
        name: 'Davca',
        gifts: [
            {
                id: '1',
                title: 'trickoD',
                description: '',
                year: 2022,
                event: 2
            },
            {
                id: '2',
                title: 'kabelkaD',
                description: '',
                year: 2023,
                event: 2
            },
            {
                id: '3',
                title: 'vonavkaD',
                description: '',
                year: 2022,
                event: 4
            },
            {
                id: '4',
                title: 'pena na holeniD',
                description: '',
                year: 2021,
                event: 1
            },
            {
                id: '5',
                title: 'knizkaD',
                description: '',
                year: 2021,
                event: 3
            }
        ]
    },
]

let selectedPerson : Person | undefined; 

export function HomeOverview({ navigation} : any ) : JSX.Element {
    const [people, setPeople] = useState<Person[]>([]);
    const [gifts, setGifts] = useState<HomeYear[]>([]);

    useEffect(() => {
        //TODO DB
        setPeople(TESTDATA);
        selectedPerson = TESTDATA[0];

        setGifts(findData());
    }, [])

    function findData(): HomeYear[] {
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
        setGifts(findData());
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

    return(
        <View>
            <Text style={GlobalStyles.header}>Gifted people </Text>
            <View style={[GlobalStyles.rowFlex, styles.group]}>
                <Button buttonStyle={[GlobalStyles.addButton, styles.groupButton]} containerStyle={styles.groupButtonContainer}>
                    <View>
                        <Icon name='account-plus' type='material-community' color={Colors.bgMain} iconStyle={styles.icon}/>
                        <Text style={{color: Colors.bgMain}}>New person</Text>
                    </View>
                </Button>
                <Button buttonStyle={[styles.groupButton, styles.secondButton]} containerStyle={styles.groupButtonContainer}>
                    <View>
                        <Icon name='account-edit' type='material-community' color={Colors.primary} iconStyle={styles.icon}/>
                        <Text style={{color: Colors.primary}}>Edit person</Text>
                    </View>
                </Button>
                <Button buttonStyle={[GlobalStyles.addButton, styles.groupButton]} onPress={() => addGift()} containerStyle={styles.groupButtonContainer}>
                    <View>
                        <Icon name='plus' type='material-community' color={Colors.bgMain} iconStyle={styles.icon}/>
                        <Text style={{color: Colors.bgMain}}>New gift</Text>
                    </View>
                </Button>
            </View>
            <View style={[GlobalStyles.rowFlex, styles.select]}>
                <Text style={styles.selectText}>Gifts for:</Text>
                <Select displayData={people.map(p => p.name)} valueData={people.map(p => p.id)} onSelect={selectedChanged}/>
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
                                    <ListItem.Chevron color={Colors.text} iconStyle={styles.icon}/>
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
    icon: {
        fontSize: 30,
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
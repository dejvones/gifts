import { Button, ListItem, Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"
import { GlobalStyles } from "../../styles/globalStyles"
import { useState } from "react"
import { Person } from "../../models/person"
import { Select } from "../shared/select"
import { HomeYear } from "./home-events"
import { Colors } from "../../styles/colors"
import { EventToString } from "../../utils/shared/enum-to-text"



export function HomeOverview({ navigation} : any ) : JSX.Element {
    const [people, setPeople] = useState<Person[]>([
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
    ]);
    const [gifts, setGifts] = useState<HomeYear[]>(findData(people[0]?.id));

    function selectedChanged(id: string): void {
        setGifts(findData(id));
    }

    function findData(id: string): HomeYear[] {
        const allGifts = people.find(p => p.id === id)?.gifts;
        if (!allGifts) return [];

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


    return(
        <View>
            <Text style={GlobalStyles.header}>Gifted people </Text>
            <Select displayData={people.map(p => p.name)} valueData={people.map(p => p.id)} onSelect={selectedChanged}/>
            <View style={styles.list}>
                {gifts.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.listYear}>{item.year}</Text>
                        {item.content.map((event, i) => (
                            <ListItem key={i} containerStyle={styles.listEvent}>
                                <ListItem.Content>
                                    <ListItem.Title style={GlobalStyles.text}>
                                        {EventToString(event.type)}
                                    </ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: Colors.bg100,
        marginTop: 5,
        padding: 5
    },
    listEvent: {
        backgroundColor: Colors.bg200,
        marginVertical: 2.5,
        paddingVertical: 10
    },
    listYear: {
        color: Colors.primary,
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 10
    }
})
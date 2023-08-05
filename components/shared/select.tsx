import { BottomSheet, ListItem, Text } from "@rneui/themed";
import { useState } from "react"
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles } from "../../styles/globalStyles";
import { Icon } from "@rneui/base";
import { Colors } from "../../styles/colors";


interface props {
    displayData : string[],
    valueData: string[],
    onSelect: (_: string) => void
}

export function Select(props: props) {
    const {displayData, valueData, onSelect} = props;

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(0);

    function nextSelect(index: number){
        setSelected(index);
        setShow(false);
        onSelect(valueData[index]);
    }

    return(
        <View>
            <TouchableOpacity onPress={() => setShow(true)} containerStyle={styles.container}>
                <View style={[GlobalStyles.rowFlex, styles.between]}>
                    <Text style={[GlobalStyles.text, styles.iconHeader]}>{displayData[selected]}</Text>
                    <Icon name={show ? 'chevron-up' : 'chevron-down'} type='material-community' color={Colors.text} iconStyle={styles.icon} />
                </View>
                
            </TouchableOpacity>
            <BottomSheet isVisible={show}>
                {displayData.map((d, index) => (
                    <ListItem key={index} onPress={() => nextSelect(index)} containerStyle={selected === index ? styles.itemActive : styles.item}>
                        <ListItem.Content>
                            <ListItem.Title style={GlobalStyles.text}>{d}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bg100,
        paddingHorizontal: 5,
        borderRadius: 10,
        margin: 5
    },
    iconHeader: {
        fontSize: 20
    },
    icon: {
        fontSize: 30
    },
    between: {
        justifyContent: 'space-between'
    },
    itemActive: {
        backgroundColor: Colors.primary
    },
    item: {
        backgroundColor: Colors.bg100
    }
})
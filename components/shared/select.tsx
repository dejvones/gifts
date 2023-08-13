import { BottomSheet, Button, ListItem, Text } from "@rneui/themed";
import { forwardRef, useImperativeHandle, useState } from "react"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles } from "../../styles/globalStyles";
import { Icon } from "@rneui/base";
import { Colors } from "../../styles/colors";


interface props {
    displayData : string[],
    valueData: string[],
    onSelect: (_: string) => void
}

export const Select = forwardRef((props : props, ref : any) => {
    const {displayData, valueData, onSelect} = props;

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(0);

    useImperativeHandle(ref, () => ({
        setNewSelect(index: number) : void {
            setSelected(index);
        }
    }))

    function nextSelect(index: number){
        setSelected(index);
        setShow(false);
        onSelect(valueData[index]);
    }

    return(
        <View style={GlobalStyles.main}>
            <TouchableOpacity disabled={valueData.length === 0} onPress={() => setShow(true)} containerStyle={styles.container}>
                <View style={[GlobalStyles.rowFlex, styles.between]}>
                    <Text style={[GlobalStyles.text, styles.iconHeader]}>{displayData[selected]}</Text>
                    <Icon name={show ? 'chevron-up' : 'chevron-down'} type='material-community' color={Colors.text} iconStyle={styles.icon} />
                </View>
                
            </TouchableOpacity>
            <BottomSheet isVisible={show}>
                <View>
                <Button TouchableComponent={TouchableWithoutFeedback} containerStyle={{alignSelf: 'flex-end'}} onPress={() => setShow(false)} 
                        buttonStyle={{backgroundColor: 'transparent'}} 
                icon={
                    <Icon name='close' type='material-community' color={Colors.primary} iconStyle={{fontSize: 30}}/>
                }/>
                {displayData.map((d, index) => (
                    <ListItem key={index} onPress={() => nextSelect(index)} containerStyle={selected === index ? styles.itemActive : styles.item}>
                        <ListItem.Content>
                            <ListItem.Title style={GlobalStyles.text}>{d}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
                </View>
            </BottomSheet>
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bg100,
        paddingHorizontal: 5,
        borderRadius: 10,
        margin: 5,
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
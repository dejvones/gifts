import { View } from "react-native";
import { GoBack } from "./go-back";
import { Text } from "@rneui/themed";
import { GlobalStyles } from "../../styles/globalStyles";
import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

interface props {
    text: string,
    goBack: () => void,
    element?: JSX.Element
}

export function Header(props : props): JSX.Element {
    const {text, goBack, element} = props;
    return (
        <View style={[GlobalStyles.rowFlex, styles.container]}>
            <GoBack clicked={goBack}/>
            <Text style={[GlobalStyles.header, styles.header]}>{text}</Text>
            {element ? element : <View></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingVertical: 5,
        justifyContent: 'space-between',
        paddingRight: 15
    },
    header: {
        borderBottomWidth: 0,
        padding: 0,
        marginVertical: 0,
        alignSelf: 'center'
    }
})
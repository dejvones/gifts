import { View } from "react-native";
import { GoBack } from "./go-back";
import { Text } from "@rneui/themed";
import { GlobalStyles } from "../../styles/globalStyles";
import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

interface props {
    text: string,
    goBack: () => void
}

export function Header(props : props): JSX.Element {
    const {text, goBack} = props;
    return (
        <View style={[GlobalStyles.rowFlex, styles.container]}>
            <GoBack clicked={goBack}/>
            <Text style={[GlobalStyles.header, styles.header]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingVertical: 5
    },
    header: {
        borderBottomWidth: 0,
        padding: 0,
        marginVertical: 0,
        alignSelf: 'center'
    }
})
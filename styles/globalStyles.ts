import { StyleSheet } from "react-native";
import { Colors } from "./colors";


export const GlobalStyles = StyleSheet.create({
    main: {
        backgroundColor: Colors.bgMain,
        flex: 1,
    },
    text: {
        color: Colors.text
    },
    rowFlex: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    columnFlex: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignContent: 'stretch'
    },
    header: {
        color: Colors.primary,
        fontSize: 25,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1
    }

}) 
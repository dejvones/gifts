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

}) 
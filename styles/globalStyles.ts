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
        padding: 10,
        marginVertical: 10,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1
    },
    list: {
        marginTop: 5,
        padding: 5
    },
    listItem: {
        backgroundColor: Colors.bg200,
        marginVertical: 2.5,
        paddingVertical: 10
    },
    addButton: {
        backgroundColor: Colors.primary,
        marginBottom: 15
    },
    icon: {
        fontSize: 30,
    },
}) 
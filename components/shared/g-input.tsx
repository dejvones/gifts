import { Input } from "@rneui/themed";
import { Colors } from "../../styles/colors";
import { StyleSheet } from "react-native";

interface props {
    label: string,
    placeholder: string,
    value: string | undefined,
    onChangeText: (text:string) => void,
    errorMsg: string | undefined
}

export function GInput(props: props): JSX.Element{
    const {label, placeholder, value, onChangeText, errorMsg} = props;
    return (
        <Input label={label} placeholder={placeholder} value={value} onChangeText={onChangeText} errorMessage={errorMsg}
                inputStyle={styles.nameInput} inputContainerStyle={styles.nameInputContainer} labelStyle={styles.nameText} 
                placeholderTextColor={Colors.bg400} selectionColor={Colors.primary} maxLength={50}/>
    )
}

const styles = StyleSheet.create({
    nameText: {
        color: Colors.text,
    },
    nameInput: {
        padding: 0,
        paddingHorizontal: 5,
        color: Colors.text
    },
    nameInputContainer: {
        borderColor: Colors.primary,
        borderBottomWidth: 1
    }
})
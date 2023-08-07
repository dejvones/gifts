import { Button, Icon } from "@rneui/themed";
import { Colors } from "../../styles/colors";
import { StyleSheet, TouchableOpacity } from "react-native";

interface props {
    clicked: () => void
}

export function GoBack(props : props) : JSX.Element {
    const {clicked} = props;
    return (
        <Button TouchableComponent={TouchableOpacity} type="clear" onPress={clicked} icon={
            <Icon name='arrow-left' type='material-community' color={Colors.primary} iconStyle={styles.icon}/>
        }/>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30
    }
})
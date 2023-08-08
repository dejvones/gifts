import { Button, Icon } from "@rneui/themed";
import { Colors } from "../../styles/colors";
import { TouchableOpacity } from "react-native";

interface props {
    onPress: () => void,
    disabled?: boolean,
    loading?: boolean
}

export function Delete(props: props): JSX.Element{
    return(
        <Button disabled={props.disabled} loading={props.loading} TouchableComponent={TouchableOpacity} containerStyle={{alignSelf: 'center'}} onPress={props.onPress} 
        buttonStyle={{backgroundColor: Colors.danger, borderRadius: 10}} 
        icon={
            <Icon name='trash-can' type='material-community' color={Colors.bgMain} iconStyle={{fontSize: 20}}/>
        }/>
    )
}
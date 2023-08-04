import { Button, Text } from "@rneui/themed"
import { View } from "react-native"
import { GlobalStyles } from "../../styles/globalStyles"



export function SettingsDetail({ navigation} : any ) : JSX.Element {
    return(
        <View>
            <Text style={GlobalStyles.text}>Detail</Text>
            <Button onPress={() => navigation.goBack()}>Neco</Button>
        </View>
    )
}
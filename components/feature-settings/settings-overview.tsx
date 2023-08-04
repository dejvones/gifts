import { Button, Text } from "@rneui/themed"
import { View } from "react-native"
import { GlobalStyles } from "../../styles/globalStyles"



export function SettingsOverview({ navigation} : any ) : JSX.Element {
    return(
        <View>
            <Text style={GlobalStyles.text}>Settings</Text>
            <Button onPress={() => navigation.navigate('Detail')}>Neco</Button>
        </View>
    )
}
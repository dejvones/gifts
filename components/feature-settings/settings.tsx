import { createStackNavigator } from "@react-navigation/stack";
import { SettingsOverview } from "./settings-overview";
import { SettingsDetail } from "./settings-detail";

export function Settings() : JSX.Element {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={SettingsOverview}/>
            <Stack.Screen name="Detail" component={SettingsDetail}/>
        </Stack.Navigator>
    )
}
import { createStackNavigator } from "@react-navigation/stack";
import { HomeOverview } from "./home-overview";

export function Home() : JSX.Element {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="h-Home" component={HomeOverview}/>
        </Stack.Navigator>
    )
}
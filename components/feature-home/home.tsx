import { createStackNavigator } from "@react-navigation/stack";
import { HomeOverview } from "./home-overview";
import { HomeGifts } from "./home-gifts";
import { HomeGiftEdit } from "./home-gift-edit";
import { HomeGiftAdd } from "./home-gift-add";
import { HomePersonEdit } from "./home-person-edit";

export function Home() : JSX.Element {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="h-Home" component={HomeOverview}/>
            <Stack.Screen name="h-Gifts" component={HomeGifts}/>
            <Stack.Screen name="h-GiftEdit" component={HomeGiftEdit}/>
            <Stack.Screen name="h-GiftAdd" component={HomeGiftAdd}/>
            <Stack.Screen name="h-PersonEdit" component={HomePersonEdit}/>
        </Stack.Navigator>
    )
}
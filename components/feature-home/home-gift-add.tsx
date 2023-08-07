import { View } from "react-native";
import { Header } from "../shared/header";

export function HomeGiftAdd({route, navigation} : any) : JSX.Element{

    function goBack(): void {
        navigation.goBack();
    }
    return (
        <View>
            <Header text="New gift" goBack={goBack}/>
        </View>
    )
}
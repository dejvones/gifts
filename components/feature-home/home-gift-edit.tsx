import { View } from "react-native";
import { Header } from "../shared/header";


export function HomeGiftEdit({route, navigation} : any) : JSX.Element{
    function goBack(): void {
        navigation.goBack();
    }
    return (
        <View>
            <Header text="Edit" goBack={goBack}/>
        </View>
    )
}
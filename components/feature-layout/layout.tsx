import { Button, View } from "react-native";

import { useState } from "react";
import { Settings } from "../feature-settings/settings";
import { History } from "../feature-history/history";

export function Layout(): JSX.Element {
    const [selectedTab, setSelectedTab] = useState(0);

    const SelectedTab = () => {
        switch(selectedTab){
            case 0:
                return <History/>
            case 1:
                return <Settings/>
            default:
                return;
        }
    }

    return(
    <View>
       <View>
        <Button onPress={() => setSelectedTab(0)} title="History"/>
        <Button onPress={() => setSelectedTab(1)} title="Settings"/>
       </View>
       {SelectedTab()}
    </View>
    )
}
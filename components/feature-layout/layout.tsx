import React from 'react'

import { StyleSheet } from "react-native";

import { History } from "../feature-history/history";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../../styles/colors";
import { Text } from "@rneui/themed";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { TabElement } from "./tab-element";
import { Icon } from '@rneui/themed';
import { Settings } from '../feature-settings/settings';

export function Layout(): JSX.Element {
    const Tab = createBottomTabNavigator();

    const tabOptions = (props: {route: RouteProp<ParamListBase, string>; navigation: any;}) : BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabel: ({focused}) => {
            return <Text style={[styles.tabBarLabel, focused ? styles.tabBarFocused : styles.tabBarNormal]}>{props.route.name}</Text>
        },
        
    })

    const screenOptions = (iconName: string) : BottomTabNavigationOptions => ({
        tabBarIcon: ({focused}) => {
            return <Icon name={iconName} type='material-community' color={Colors.primary} iconStyle={focused ? styles.tabIconFocused : styles.tabIconNormal}/>
        },
    })
    return(
        <Tab.Navigator screenOptions={tabOptions}>
            { tabs.map((tab, index) => 
                <Tab.Screen key={index} name={tab.name} component={tab.component} options={() => screenOptions(tab.iconName)}/>
            )}
        </Tab.Navigator>
    )
}

const tabs : TabElement[] = [
    {
        name: 'Home',
        iconName: 'home-outline',
        component: History
    },
    {
        name: 'Explore',
        iconName: 'creation',
        component: History
    },
    {
        name: 'Settings',
        iconName: 'cog-outline',
        component: Settings
    }
]

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: Colors.bgMain,
        borderTopColor: Colors.primary,
        borderTopWidth: 1
    },
    tabBarLabel: {
        color: Colors.primary
    },
    tabBarNormal: {
        fontWeight: 'normal',
        fontSize: 10
    },
    tabBarFocused: {
        fontWeight: 'bold',
        fontSize: 12
    },
    tabIconFocused: {
        fontWeight: 'bold',
        fontSize: 30
    },
    tabIconNormal: {
        fontWeight: 'normal',
        fontSize: 20
    },

})
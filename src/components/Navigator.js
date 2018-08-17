import React, { Component } from 'react'
// Navigators
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

// StackNavigator screens
import Splash from "../../App";
import Main from "../components/Main";
import Home from "../homescreen/homescreen";
import { DrawerNavigator } from "react-navigation";
import SideBar from "../sidebar/sidebar.js";
export const Stack = createStackNavigator({
    Splash: {
        screen: Splash,
    },
    Home:   DrawerNavigator({
        screen: Home,

    }),
    Main:   {
        screen: Main,
    },
    
},
{
    contentComponent: props =><Sidebar {...props}/>
});

export default Stack
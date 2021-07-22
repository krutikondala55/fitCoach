
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import FeedScreen from "../screens/FeedScreen";
import LogoutScreen from "../screens/LogoutScreen"

const Drawer = createDrawerNavigator();

const DrawerNavigator=() =>{

return(
<Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Logout" component={LogoutScreen}/>
    
    
    </Drawer.Navigator>

)

}

export default DrawerNavigator;



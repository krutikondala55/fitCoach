import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../screens/FeedScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'LoginScreen') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'LogoutScreen') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return 
                    <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="LoginScreen" component={LoginScreen} />
            <Tab.Screen name="FeedScreen" component={FeedScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
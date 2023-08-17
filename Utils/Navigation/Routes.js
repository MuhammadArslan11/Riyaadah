import React from 'react';
import { NAVIGATION_ROUTES } from './NavigationRoutes';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../screens/Splash';
import Home from '../../screens/Home';
import Azkar from '../../screens/Azkar';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator >

            <Stack.Screen
                name={NAVIGATION_ROUTES.SPLASH}
                component={Splash}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={NAVIGATION_ROUTES.HOME}
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={NAVIGATION_ROUTES.AZKAR}
                component={Azkar}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}
export default AuthNavigator;
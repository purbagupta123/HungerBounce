import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDefaultTheme} from './src/utils/theme';
import AppNavigation from "./src/layouts/navigation/AppNavigation";
import { LogBox } from 'react-native'
import ignoreWarnings from 'ignore-warnings';

ignoreWarnings('warn',['ViewPropTypes','[react-native-gesture-handler]'])

LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])

export default function App() {
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
            <NavigationContainer theme={CombinedDefaultTheme}>
                <AppNavigation/>
            </NavigationContainer>
        </PaperProvider>
    );
}

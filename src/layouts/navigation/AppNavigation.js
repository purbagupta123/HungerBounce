import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../navigation/TabNavigation';
import OderDetails from '../screens/OderDetails';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import OtpVerification from '../screens/OtpVerification';
import MyProfile from '../screens/MyProfile';
import ChangeNumber from '../screens/ChangeNumber';
import MyAddress from '../screens/MyAddress';
import StoreLocation from '../screens/StoreLocation';
import Notification from '../screens/Notification';
import About from '../screens/About/About';
import TermsCondition from '../screens/About/TermsCondition';
import PrivacyPolicy from '../screens/About/PrivacyPolicy';
import AboutUs from '../screens/About/AboutUs';
import MixCookies from '../screens/MixCookies';
import RateOder from '../screens/RateOder';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="TabNavigation"  screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Group screenOptions={{ headerShown: true,headerTitleAlign:'center' }}>

                <Stack.Screen name="My Profile" component={MyProfile}
                              options={{
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="OderDetails" component={OderDetails}
                              options={{
                                  title: 'Oder Details',
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="Change Number" component={ChangeNumber}
                              options={{
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="My Address" component={MyAddress}
                              options={{
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="Store Location" component={StoreLocation}
                              options={{
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="About" component={About}
                              options={{
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="TermsCondition" component={TermsCondition}
                              options={{
                                  title: 'Terms & Condition',
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
                              options={{
                                  title: 'Privacy Policy',
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="AboutUs" component={AboutUs}
                              options={{
                                  title: 'About Us',
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="MixCookies" component={MixCookies}
                              options={{
                                  title: 'Mix Cookies',
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
                <Stack.Screen name="RateOder" component={RateOder}
                              options={{
                                  title: 'Rate Oder',
                                  headerTintColor: '#ffbd00',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default AppNavigation;

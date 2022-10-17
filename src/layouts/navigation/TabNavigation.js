import React from 'react';
import Home from '../screens/Home';
import MyOder from '../screens/MyOder';
import Notification from '../screens/Notification';
import More from '../screens/More';
import Wheel from '../screens/Wheel';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Image, StyleSheet, TouchableOpacity,View} from 'react-native';


const TabNavigation = () => {

    const CustomWheel = ({children, onPress})=>{
        return(
            <TouchableOpacity style={{top:-30,justifyContent:'center',alignItems:'center'}} onPress={onPress}>
                <View style={{width: 70,height: 70,borderRadius:35}}>
                    {children}
                </View>
            </TouchableOpacity>
        )

    }
    const Tab = createMaterialBottomTabNavigator();
    return (

        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FFA000"
            inactiveColor="#BDBDBD"
            barStyle={{ backgroundColor: '#FFFFFF',paddingTop:10}}>
            <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <FIcon name="home" color={color} size={26}  />
                            ),
                        }}/>
            <Tab.Screen name="MyOder" component={MyOder}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <FIcon name="shopping-bag" color={color} size={26} />
                            ),
                        }}/>
            <Tab.Screen name="Wheel" component={Wheel}
                        options={{

                            tabBarIcon: ({ focused }) => (
                                <Image resizeMode='cover' style={styles.image}
                                       source={require('../../assets/imgs/Wheel.jpg')} />

                            ),
                            tabBarButton : (props)=>{
                                return (<CustomWheel {...props}/> )

                            }
                        }}
            />
            <Tab.Screen name="Notification" component={Notification}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="notifications" color={color} size={26} />
                            ),
                        }}/>

            <Tab.Screen name="More" component={More}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <FIcon name="align-right" color={color} size={20} />
                            ),
                        }}
            />

        </Tab.Navigator>
    );
}


export default TabNavigation;
const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 70,
marginTop:-24

    }
})

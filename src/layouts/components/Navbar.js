
import React from 'react';
import {View, Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Notification from '../screens/Notification';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Navbar = () => {
    const navigation=useNavigation();

    return (
        <View style={styles.Navbar}>
            <View style={{flexDirection:'column'}}>
            <Text style={{color:'#4E342E'}}>Current Location</Text>
            <Text style={{color:'#4E342E'}}>Rabindra Pally</Text>
            </View>
            <TouchableOpacity style={styles.person}>
                    <Ionicons name="person"  size={26}
                              style={{color: "#FCB900",marginTop:15}}
                              onPress={() => navigation.navigate('Login')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifications}>
                {/*onPress={() => navigation.navigate('Notification')}>*/}
                <View style={styles.length}>
                    <Text style={styles.cartLength}>1</Text>
                </View>

                <Ionicons name="cart-sharp"  size={26}  style={{
                    color: "#FCB900",marginLeft:10}} />
            </TouchableOpacity>
        </View>
    );
};

export default Navbar;
const styles=StyleSheet.create({
    person:{
        position:'absolute',
        right:70,
        alignItems: 'center'
    },
    Navbar:{
        marginTop:8,
        height:60,
        paddingVertical:4,
        paddingHorizontal:16,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:8,
    },
    notifications:{
        position:'absolute',
        right:16,
        alignItems: 'center'
    },
    icon:{
        position:'absolute',
        left:0,
        marginLeft:10,
        marginTop:22,
    },
    icon_Notification:{
        marginLeft:10,
        marginTop:5
    },
    length:{
        alignSelf: 'flex-end',
        borderRadius: 20,
        top:10,
        right:-10,
        width:16,
        height:16,
        alignItems:'center',
        backgroundColor: '#FCB900',
    },
    cartLength:{
        color: 'white',
        fontSize: 12
    }

})

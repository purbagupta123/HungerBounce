import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Notification from '../screens/Notification';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';

const More = ({navigation}) => {
    return (
        <>
            <View style={styles.Navbar}>
                <Text style={styles.navText}>More</Text>
            </View>
            <View style={{paddingHorizontal:14,marginLeft:10}}>


 <TouchableOpacity style={styles.row}  onPress={() => navigation.navigate('My Profile')}>
     <Ionicons name="person" size={24}
               style={{color: '#FCB900',
                   marginRight:-2
               }}/>
     <Text style={styles.MoreText} >My Profile</Text>
     </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
                <Image
                    style={styles.rewardImage}
                    source={require('../../assets/imgs/reward.png')}
                />
                <Text style={styles.MoreText} >My Reward</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('My Address')}>
                <Image
                    style={styles.rewardImage}
                    source={require('../../assets/imgs/location.png')}
                />
                <Text style={styles.MoreText}>My Address</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <Image
                    style={styles.rewardImage}
                    source={require('../../assets/imgs/frontstore.png')}
                />
                <Text style={styles.MoreText} onPress={() => navigation.navigate('Store Location')}>Store Location</Text>
            </View>
            <TouchableOpacity style={styles.row} onPress={()=>{navigation.navigate('Change Number')}}>
                <Ionicons name="call" size={24} style={{
                    color: '#FCB900',
                    marginRight:-2
                }}/>
                <Text style={styles.MoreText}>Change Number</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <FIcon name="language" size={26} style={{
                    color: '#FCB900',

                }}/>
                <Text style={styles.MoreText}>Change Language</Text>
            </View>
                <View style={styles.row}>
                    <Ionicons name="log-in-outline" size={26} style={{
                        color: '#FCB900',
                    }}/>
                    <Text style={styles.MoreText}>Enter Details</Text>
                </View>
                <View style={styles.row}>
                    <FIcon name="info" size={26} style={{
                        color: '#FCB900',marginLeft:10,marginRight:5

                    }}/>
                    <Text style={styles.MoreText} onPress={() => navigation.navigate('About')}>About</Text>
                </View>

            <View style={styles.row}>
                <Ionicons name="log-in-outline" size={26} style={{
                    color: '#FCB900',
                }}/>
                <Text style={styles.MoreText}>Logout</Text>
            </View>

            </View>
        </>
    );
};

export default More;
const styles = StyleSheet.create({
    textArrow:{
        flexDirection:'row',
    },
    MoreText:{
        color: '#98655a',
        fontSize:16,
        fontWeight:'600',
        marginLeft:15
    },

    row: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    rewardImage: {
        height: 20,
        width: 20,
    },
    navText: {
        paddingHorizontal: 160,
        fontSize:20,
        fontWeight: '600',
        color: '#ffbd00',
    },
    Navbar: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',

    },

});

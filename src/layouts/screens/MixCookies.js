
import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity,FlatList} from 'react-native';

const MixCookies =({navigation})=>{
    let arr = [];
    for (let i=0, t=10; i<t; i++) {
        arr.push(t)
    }
    const renderItem =()=>{
        return(
            <TouchableOpacity
                onPress={() => navigation.navigate('OderDetails')}
                style={styles.order}>
                <Image
                    style={styles.oderImage}
                    source={require('../../assets/imgs/cookies.jpeg')}
                />
                <View style={{padding:10}}>
                    <Text style={styles.oderId}>Original Cookies 12 Pcs</Text>
                    <Text style={styles.delivery}>Original Cookies</Text>

                </View>
                <View style={{flexDirection:'column',marginLeft:10}}>
                    <Text style={styles.price}>KD 4.000</Text>
                    <Text style={styles.status}>Add</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return(
        <>
            <FlatList
                data={arr}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </>
    )
}
const styles = StyleSheet.create({
    status:{
        color:"white",
        fontWeight:'600',
        marginTop:40,
        borderWidth:1,
        borderRadius: 8,
        padding:3,
        textAlign:'center',
        backgroundColor:"#FCB900",
        borderColor:'#FCB900'
    },
    price:{
        color:"#FCB900",
        fontWeight:'800',
        marginTop:5,
    },
    oderId:{
        marginTop:-5,
        color: '#98655a',
        fontWeight:'600',
        fontSize:16,
        marginBottom:5
    },
    delivery:{
        color: '#98655a',
        paddingVertical:5
    },
    oderImage:{
        width:100,
        height:100,
        borderRadius:16
    },
    order:{
        flexDirection:'row',
        padding:20
    }
})
export default MixCookies;

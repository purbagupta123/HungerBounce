import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const RateOder =()=>{
    return(
        <View style={{padding:14}}>
    <Text style={styles.Item}>Items</Text>
    <View
        style={styles.order}>
        <Image
            style={styles.oderImage}
            source={require('../../assets/imgs/candy.jpeg')}
        />
        <View style={{padding:10}}>
            <Text style={styles.OderName}>Funny Three - 18Pcs</Text>
            <Text style={styles.delivery}>Nutella Brownies</Text>
            <Text style={styles.delivery}>Delivery(Durgapur)</Text>
        </View>
        <View style={{flexDirection:'column',marginLeft:24}}>
            <Text style={styles.price}>KD 4.000</Text>
            <Text style={styles.status}>Collected</Text>
        </View>
    </View>
            <Text style={styles.RateOder}>Rate Oder</Text>
        </View>
    )
}
export default RateOder;
const styles = StyleSheet.create({
    RateOder:{
        color: '#98655a',
        fontWeight:'600',
        marginLeft:5,
        marginBottom:8,
        fontSize:16,
        paddingTop:20
    },
    OderDetails:{
        color: '#98655a',
        paddingVertical: 2.5
    },
    OderDetails2:{
        alignItems:'flex-end',
        marginTop:5,

    },
    detailsText:{
        color: '#98655a',
        marginTop:20,
        fontWeight:'600',
        fontSize:16,
    },
    Item:{
        color: '#98655a',
        fontWeight:'600',
        marginLeft:5,
        marginBottom:8,
        fontSize:16,
    },
    status:{
        color:"#03bb2e",
        fontWeight:'600',
        marginTop:40
    },
    price:{
        color:"#FCB900",
        fontWeight:'800',
        marginTop:5,
    },
    OderName:{
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

    }
})

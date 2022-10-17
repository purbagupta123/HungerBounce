import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView,Alert} from 'react-native';
const OderDetails=({navigation})=>{
    return(
        <>
        <ScrollView style={{padding:20}}>
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
                <Text style={styles.status}>Pending</Text>
            </View>
        </View>
            <Text style={styles.detailsText}>Details</Text>
            <View style={styles.details}>
            <View style={{marginTop:10}}>
            <Text style={styles.OderDetails}>Oder Number</Text>
            <Text style={styles.OderDetails}>Date & Time</Text>
                <Text style={styles.OderDetails}>Payment method</Text>
                <Text style={styles.OderDetails}>Oder type</Text>
            </View>
            <View style={styles.OderDetails2}>
                <Text style={styles.OderDetails}>849725</Text>
                <Text style={styles.OderDetails}>01/02/2020,10:30pm</Text>
                <Text style={styles.OderDetails}>Knet</Text>
                <Text style={styles.OderDetails}>Pickup</Text>
            </View>
            </View>
            <Text style={styles.detailsText}>Address</Text>
            <View style={{marginTop:10}}>
                <Text style={styles.OderDetails}>Durgapur</Text>
                <Text style={styles.OderDetails}>Block A,Rabindra Pally,</Text>
                <Text style={styles.OderDetails}>Sarabitan Sarany</Text>
                <Text style={styles.OderDetails}>Pick-up before:07:00pm</Text>
            </View>

            <Text style={styles.detailsText}>Payment Summary</Text>
            <View style={styles.details}>
                <View style={{marginTop:10}}>
                    <Text style={styles.OderDetails}>Subtotal</Text>
                    <Text style={styles.OderDetails}>Discount</Text>
                    <Text style={styles.OderDetails}>Delivery fee</Text>
                    <Text style={styles.OderDetails}>Total</Text>
                </View>
                <View style={styles.OderDetails2}>
                    <Text style={styles.OderDetails}>KD</Text>
                    <Text style={styles.OderDetails}>01/02/2020,10:30pm</Text>
                    <Text style={styles.OderDetails}>Knet</Text>
                    <Text style={styles.OderDetails}>Pickup</Text>
                </View>
            </View>

    </ScrollView>
    <View style={{marginBottom:20,padding:16}}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('RateOder')}>
            <Text style={styles.btnText}>Contact Us</Text>
        </TouchableOpacity>
    </View>
   </>
    )
}
const styles = StyleSheet.create({
    btnText:{
        fontWeight:'800',
       textAlign:'center',
        fontSize:16,
        color:'white'
    },
    button:{
        borderRadius: 10,
        backgroundColor:'#ffbd00',
         top:15,
          padding:16
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between',
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
        color:"#ff9100",
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
export default OderDetails;

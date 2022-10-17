import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity,FlatList} from 'react-native';

const MyOder =({navigation})=>{
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
                source={require('../../assets/imgs/candy.jpeg')}
            />
            <View style={{padding:10}}>
                <Text style={styles.oderId}>#85693427</Text>
                <Text style={styles.delivery}>01/02/2022,10:30</Text>
                <Text style={styles.delivery}>Delivery(Durgapur)</Text>
            </View>
            <View style={{flexDirection:'column',marginLeft:80}}>
                <Text style={styles.price}>KD 4.000</Text>
                <Text style={styles.status}>Pending</Text>
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
        color:"#ff9100",
        fontWeight:'600',
        marginTop:40
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
export default MyOder;

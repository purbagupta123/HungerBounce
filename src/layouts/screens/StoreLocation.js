import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const StoreLocation = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },

    ];
    const renderItem =()=>{
        return(
            <View style={{padding: 14}}>
                <Text style={styles.Name}>Salmiya</Text>
                <Text style={styles.text}>Rabindra Pally A Block</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.text}>Durgapur 1</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get direction</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

    );
};

export default StoreLocation;
const styles = StyleSheet.create({
    buttonText:{
        color:'white',
        fontWeight: '600'
    },
    text:{
        color: '#98655a',
    },
    button: {
        borderColor:'#FCB900',
        borderWidth:1,
        borderTopEndRadius:20,
        padding:5,
        backgroundColor:'#FCB900',
        paddingHorizontal:12
    },
    Name: {
        fontWeight: '600',
        color: '#98655a',
        fontSize: 16,
        marginBottom:3
    },
});

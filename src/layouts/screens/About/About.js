import React from 'react';
import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const About =({navigation})=>{
    return(
        <View style={{padding:16}}>
<TouchableOpacity style={styles.arrowText}   onPress={() => {navigation.navigate('TermsCondition')}}>
        <Text style={styles.text}>Terms & Condition</Text>
            <Image
                style={styles.arrowImage}
                source={require('../../../assets/imgs/next.png')}
            />
</TouchableOpacity>

            <TouchableOpacity style={styles.arrowText} onPress={() => {navigation.navigate('PrivacyPolicy')}}>
                <Text style={styles.text}>Privacy Policy</Text>
                <Image
                    style={styles.arrowImage}
                    source={require('../../../assets/imgs/next.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowText} onPress={() => {navigation.navigate('AboutUs')}}>
                <Text style={styles.text}>About Us</Text>
                <Image
                    style={styles.arrowImage}
                    source={require('../../../assets/imgs/next.png')}
                />
            </TouchableOpacity>
        </View>
    )
}
export default About;
const styles = StyleSheet.create({
    arrowText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 25
    },
    text:{
        marginBottom:10,
        color: '#98655a',
        fontSize:17,
        fontWeight:'600'
    },
    arrowImage: {
        height: 20,
        width: 20,

    },
})

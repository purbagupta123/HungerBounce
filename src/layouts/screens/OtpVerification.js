import React from 'react';
import {
    Text, View, ImageBackground,
    StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import {Card, Title} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const OtpVerification =({navigation})=>{
    const [text, setText] = React.useState("");
    return (
        <View>
            <ImageBackground
                source={require('../../assets/imgs/cookie.jpg')}
                resizeMode="stretch"
                style={styles.img}>

                <Card style={{
                    backgroundColor:'#994a06',
                    marginTop: 100,
                    height:350,
                    width:360,
                    borderRadius:28,
                    opacity:0.4,

                }}>
                </Card>
                <View style={styles.CardInner}>
                    <View style={{paddingVertical:290}}>
                        <Text style={styles.Verification}>
              OTP Verification
                        </Text>

                        <TextInput
                            style={styles.LoginInput}
                            mode="outlined"
                            outlineColor='#994a06'
                            activeOutlineColor='#994a06'
                            value={text}
                            onChangeText={text => setText(text)}
                        />

                            <Text style={styles.second}>52s</Text>
                        <Text style={styles.haveAccount}>Resend</Text>
                        <View style={{alignItems:'center',paddingVertical:50}}>
                            <TouchableOpacity style={styles.LoginBtn}>
                                <Text style={styles.btnText}>Verify</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default OtpVerification;

const styles = StyleSheet.create({
    second:{
        color:'#ffcf46',
        textAlign:'center',
        fontWeight:'600',
        fontSize:22
    },
    btnText:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        paddingVertical:10,

    },
    LoginBtn:{
        borderRadius:8,
        backgroundColor:'#ffae00',
        height:45,
        width:140,
    },
    haveAccount:{
        color:'white',
        textAlign:'center',
        fontWeight:'600',
        fontSize:22
    },
    Register:{
        color:'#ffbd00',
        paddingLeft:5,
        textDecorationLine: 'underline',
        fontWeight: '600'
    },
    LoginInput:{
        borderRadius:10,
        marginBottom:18,
        width:"80%",
        marginLeft:50,
        height:50
    },
    Verification:{
        color:'white',
        textAlignVertical:'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 20,
    },
    MobNo:{
        paddingLeft:60,
        color:'white',
        marginTop:30,
        fontSize: 16,
    },
    CardInner:{
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:9,
    },
    login:{
        color:'white',
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center'
    },
    img: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
});


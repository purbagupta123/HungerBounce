import React from 'react';
import {
    Text, View, ImageBackground,
    StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import {Card, Title} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Login =({navigation})=>{
    const [text, setText] = React.useState("");
        return (
            <View>
                <ImageBackground
                    source={require('../../assets/imgs/cookie.jpg')}
                    resizeMode="stretch"
                    style={styles.img}>

                    <Card style={{
                        backgroundColor:'#994a06',
                        height:300,
                        width:360,
                        borderRadius:28,
                        opacity:0.4,

                    }}>
                    </Card>
                       <View style={styles.CardInner}>
                           <View style={{paddingVertical:270}}>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                        <Text style={styles.MobNo}>Mobile Number</Text>
                           <TextInput
                               style={styles.LoginInput}
                               mode="outlined"
                               outlineColor='#994a06'
                               activeOutlineColor='#994a06'
                               value={text}
                               onChangeText={text => setText(text)}
                           />
                           <View style={{flexDirection:'row',justifyContent:'center',}}>
                           <Text style={styles.haveAccount}>Don't have an account?</Text>
                           <Text style={styles.Register}
                                 onPress={() => navigation.navigate('SignUp')}>Register</Text>
                           </View>
                           <View style={{alignItems:'center',paddingVertical:20}}>
                               <TouchableOpacity style={styles.LoginBtn}>
                                   <Text style={styles.btnText} onPress={() => navigation.navigate('OtpVerification')}>Login</Text>
                               </TouchableOpacity>
                           </View>
                    </View>
                       </View>
                </ImageBackground>
            </View>
        );
    };

    export default Login;

    const styles = StyleSheet.create({
        btnText:{
            textAlign:'center',
            paddingVertical:10,
            fontSize:18,
            fontWeight:'600'
        },
        LoginBtn:{
            borderRadius:8,
            backgroundColor:'#ffae00',
            height:45,
            width:140,
        },
        haveAccount:{
            color:'white'
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
        loginText:{
            color:'white',
            textAlignVertical:'center',
            textAlign: 'center',
            alignItems: 'center',
            fontSize: 24,
            fontWeight: '600'
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


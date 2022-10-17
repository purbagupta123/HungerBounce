import React from 'react';
import {
    Text, View, ImageBackground,
    StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import {Card, Title} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SignUp =({navigation})=>{
    const [text, setText] = React.useState("");
    return (
        <View>
            <ImageBackground
                source={require('../../assets/imgs/cookie.jpg')}
                resizeMode="stretch"
                style={styles.img}>
                <Card style={{
                    backgroundColor:'#994a06',
                    height:600,
                    width:360,
                    borderRadius:28,
                    opacity:0.4,
                }}>
                </Card>
                <View style={styles.CardInner}>
                    <View style={{paddingVertical:120}}>
                        <Text style={styles.CreateAct}>
                           Create Account
                        </Text>
                        <Text style={styles.MobNo}>Full Name</Text>
                        <TextInput
                            style={styles.LoginInput}
                            mode="outlined"
                            outlineColor='#994a06'
                            activeOutlineColor='#994a06'
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                        <Text style={styles.MobNo}>Email Address</Text>
                        <TextInput
                            style={styles.LoginInput}
                            mode="outlined"
                            outlineColor='#994a06'
                            activeOutlineColor='#994a06'
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                        <Text style={styles.MobNo}>Mobile Number</Text>
                        <TextInput
                            style={styles.LoginInput}
                            mode="outlined"
                            outlineColor='#994a06'
                            activeOutlineColor='#994a06'
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={styles.haveAccount}>By continuing,you agree to our </Text>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.TC}> Terms & Condition</Text>
                                <Text style={styles.and}> and </Text>
                                <Text style={styles.TC}> Privacy Policy</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
                            <Text style={styles.haveAccount}>Already have an account?</Text>
                            <Text style={styles.Login}    onPress={() => navigation.navigate('Login')}>Login</Text>
                        </View>
                        <View style={{alignItems:'center',paddingVertical:20}}>
                            <TouchableOpacity style={styles.RegisterBtn}>
                                <Text style={styles.btnText}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    btnText:{
        textAlign:'center',
        paddingVertical:10,
        fontWeight:'600',
        fontSize:18,
    },
    RegisterBtn:{
        borderRadius:8,
        backgroundColor:'#ffae00',
        height:45,
        width:140,

    },
    haveAccount:{
        color:'white',
        fontSize:16,
        marginTop:5
    },
    and:{
        color:'white',
        fontSize:16,
    },
    TC:{
        color:'#ffbd00',
        paddingLeft:5,
        fontWeight: '600',
        fontSize:16
    },
    LoginInput:{
        borderRadius:10,
        // marginBottom:18,
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
    CreateAct:{
        color:'white',
        fontWeight: 'bold',
        fontSize:24,
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
    Login:{
        color:'#ffbd00',
        paddingLeft:5,
        textDecorationLine: 'underline',
        fontWeight: '600',
        fontSize:16,
        marginTop:5
    },
});


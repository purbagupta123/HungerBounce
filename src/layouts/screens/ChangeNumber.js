import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
const ChangeNumber=()=>{
    return(
        <>
            <View style={{padding: 18}}>
                <Text style={styles.InputText}>Mobile Number</Text>
                <TextInput
                    style={styles.LoginInput}
                    mode="outlined"
                    outlineColor="#994a06"
                    activeOutlineColor="#994a06"
                />
            </View>
        </>
    )
}
export default ChangeNumber;
const styles = StyleSheet.create({
    InputText: {
        fontSize:16,
        color: '#98655a',
        fontWeight:'600'

    },
    LoginInput: {
        borderRadius: 20,
        marginVertical:8,
        width: '100%',
        // marginLeft: 50,
        height: 50,
    },
});

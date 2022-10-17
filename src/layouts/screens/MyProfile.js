import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const MyProfile = () => {
    return (
        <>
            <View style={{padding: 20}}>
                <Text style={styles.InputText}>Full Name</Text>
                <TextInput
                    style={styles.LoginInput}
                    mode="outlined"
                    outlineColor="#994a06"
                    activeOutlineColor="#994a06"
                />
                <Text style={styles.InputText}>Email Address</Text>
                <TextInput
                    style={styles.LoginInput}
                    mode="outlined"
                    outlineColor="#994a06"
                    activeOutlineColor="#994a06"
                />
            </View>
        </>
    );
};
export default MyProfile;
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

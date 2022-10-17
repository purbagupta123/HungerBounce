import React, {useState} from 'react';
import {View, Text, StyleSheet,Switch} from 'react-native';

import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Notificaton = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
        <View style={styles.navbar}>
            <Text style={styles.navText}>Notification</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#ffbd00" }}
                thumbColor={isEnabled ? "#ffbd00" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
            <View style={{padding:20}}>
            <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Text style={styles.NotificationText}>Notification Title</Text>
                </Card.Actions>
                <Card.Actions>
                    <Text style={styles.notificationDescription}>Chocolate is a food made from cacao beans. Commercial chocolate has sugar and sometimes milk added.</Text>
                </Card.Actions>
            </Card>
                <View style={{paddingTop:10}}>
                <Card>
                    <Card.Actions>
                        <Text style={styles.NotificationText}>Notification Title</Text>
                    </Card.Actions>
                    <Card.Actions>
                        <Text style={styles.notificationDescription}>Chocolate is a food made from cacao beans. Commercial chocolate has sugar and sometimes milk added.</Text>
                    </Card.Actions>
                </Card>
            </View>
            </View>
        </View>

    );

}
export default Notificaton;
const styles = StyleSheet.create({
    notificationDescription:{
        fontSize:14,
        marginTop:-10,
        color: '#98655a',
        paddingBottom:15
    },
    navbar:{
        borderColor:'white',
        borderWidth:1,
        backgroundColor:"white",
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15
    },
    navText: {
        textAlign:'center',
      paddingLeft:130,
        fontSize:20,
        fontWeight: '600',
        color: '#ffbd00',
    },
    NotificationText:{
        color: '#98655a',
        fontSize:18,
        fontWeight: '600',
    }
})

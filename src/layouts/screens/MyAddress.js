import React, {useRef, useState} from 'react';
import {Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableHighlight, Alert} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const MyAddress = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
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
    const renderItem = () => {
        return (
            <>
                {/*<Portal>*/}
            {/*    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>*/}
            {/*        <Text>Example Modal.  Click outside this area to dismiss.</Text>*/}
            {/*    </Modal>*/}
            {/*</Portal>*/}
                <View style={{padding: 14}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.Text}>Qibla</Text>
                        <View>
                            <Image
                                style={styles.dots}
                                source={require('../../assets/imgs/dots.png')}
                            />
                        </View>
                    </View>
                    <Text style={styles.Address}>Block 15, Farhad-Ali-Street</Text>
                    <Text style={styles.Address}>Jon Tower</Text>
                    <Text style={styles.Address}>Mobile:98576348</Text>
                </View>
            </>
        );
    };
    return (

        <>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </>
    );
};
export default MyAddress;
const styles = StyleSheet.create({
    Text: {
        color: '#98655a',
        fontSize: 18,
        fontWeight: '600',
    },
    Address: {
        color: '#98655a',
    },
    dots: {
        height: 25,
        width: 25,
    },
});

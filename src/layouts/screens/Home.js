import React,{useEffect,useState,useRef}from 'react';
import {ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {Touchable} from 'react-native';
import Navbar from '../components/Navbar';
import SliderPage from '../components/SliderPage';
import IonIcon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import FIcon from "react-native-vector-icons/FontAwesome";
const Home=({navigation})=>{
    const [checked, setChecked] = React.useState(false);
    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
    const refRBSheet = useRef();
    useEffect(() => {
        open();
    }, []);
    const open = () => {
        refRBSheet.current.open();
    };
    const renderHead = () => {
        return (
            <>
            <Text>HI</Text>
            </>
        )
    }





    const RenderInner = () => {
        return(
            <View style={styles.panel}>
                <View>
                    <Text style={styles.SheetTitle}>Choose Location</Text>
                    <View style={{flexDirection: 'row'}}>
                        <IonIcon name="md-locate-sharp" size={24} color="#FFA000" style={{marginTop: 20}}/>
                        <View>
                            <Text style={styles.CurrentLocation}>Select current location</Text>
                            <Text style={styles.panelText}>Rabindra Pally</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row', paddingBottom: 40}}>
                        <FIcon name="map-pin" size={24} color="#FFA000" style={{marginTop: 45}}/>

                        <View>
                            <Text style={styles.DifferLocation}>Select different location</Text>
                            <Text style={styles.panelText}>Choose location on map</Text>
                        </View>

                    </View>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                    }}
                >
                </RBSheet>
            </View>
        );
    }


    return(
        <>
        <Navbar/>

        <ScrollView>
            <View style={{marginTop:14}}>
            <SliderPage/>
            </View>
            <View style={{paddingHorizontal:14}}>
            <Text style={styles.Our_Menu}>Our Menu</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('MixCookies')}>
                <Card style={styles.card}>
                    <Card.Cover mode="contained" source={require('../../assets/imgs/food6.jpeg')} />
                    <Text style={styles.Original}>Original Cookies Offer</Text>
                </Card>
                </TouchableOpacity>
                <Card style={styles.card}>
                    <Card.Cover source={require('../../assets/imgs/food2.jpg')}/>
                    <Text style={styles.Original}>Original Cookies Offer</Text>
                </Card>
            <Card style={styles.card}>
                <Card.Cover source={require('../../assets/imgs/food1.jpg')}/>
                <Text style={styles.Original}>Original Cookies Offer</Text>
            </Card>
            </View>
        </ScrollView>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "white"
                    }
                }}
            >
                <RenderInner/>
            </RBSheet>

        </>
        );
};
const styles = StyleSheet.create({
    Original: {
        fontWeight:'600',
        paddingHorizontal:80,
        fontSize: 18,
        paddingVertical:10,
        color:'#4E342E'
        },
    Our_Menu:{
        fontSize:24,
        fontWeight:'600',
        marginTop: 15,
        marginVertical:10,
        color:'#4E342E'
    },
    offer:{
        color:'#4E342E',
        alignItems:'center',
    },
    card:{
       marginVertical: 10,
        borderRadius:18
    },

    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
    },

    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    SheetTitle: {
        marginTop:-20,
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 12,
        color: '#98655a',
        fontWeight: '600',
    },
    CurrentLocation: {
        fontSize: 22,
        fontWeight: '600',
        color: '#98655a',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    DifferLocation: {
        fontWeight: '600',
        fontSize: 22,
        color: '#98655a',
        marginTop: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    panelText: {
        fontSize: 16,
        color: '#98655a',
        paddingHorizontal: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    }, checkbox: undefined,

});



export default Home;

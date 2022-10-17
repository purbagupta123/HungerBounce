import React,{useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text} from 'react-native';
import Animated, {Extrapolate, interpolate, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

    const SRC_WIDTH =Dimensions.get("window").width;
    const CARD_LENGTH=SRC_WIDTH * 0.8;
    const SPACING=SRC_WIDTH * 0.02;
    const SIDECARD_LENGTH=(SRC_WIDTH *0.18)/2;
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
    interface itemProps{
        index:number,
        scrollx:number
    }

    function Item({index, scrollx} : itemProps){
        const size= useSharedValue(0.8);
        const inputRange=[
            (index-1)* CARD_LENGTH,
            index * CARD_LENGTH,
            (index+1)* CARD_LENGTH
        ]
        size.value =interpolate(
            scrollx,
            inputRange,
            [0.8,1,0.8],
            Extrapolate.CLAMP,
        )
        const cardStyle =useAnimatedStyle(()=>{
            return {
                transform: [{scaleY: size.value}]
            }
        })


        return(
            <Animated.View style={[styles.card,cardStyle,
                {
                    marginLeft:index ==0 ? SIDECARD_LENGTH :SPACING,
                    marginRight:index ==2 ? SIDECARD_LENGTH :SPACING,
                }]}>
                <Image
                    source={require("../../assets/imgs/slideImage.jpeg")}
                    style={{height:350,width:300,borderRadius:14}}
                />
            </Animated.View>
        )
    }

    const SliderPage = () => {
        const [scrollx,setScrollx]=useState(0);
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
        // const DATA=[1,2,3,4,5,6,7,8]
        return (
                    <Animated.View>
                        <AnimatedFlatList
                            data={DATA}
                                          horizontal={true}
                                          renderItem={({item,index})=>{
                                              return(
                                                  <Item index={index} scrollx={scrollx}/>
                                              )
                                          }}
                                          keyExtractor={(item) => item.id}
                                          onScroll={(event)=>{setScrollx(event.nativeEvent.contentOffset.x);
                                          }}
                        />
                    </Animated.View>
    )
}
const styles = StyleSheet.create({
    slide:{
        marginTop:20,
        marginRight:20
    },
})
export default SliderPage;

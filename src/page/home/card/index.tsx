import * as React from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground, Animated, Dimensions, PanResponder} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import {DetailPage} from "../../detail";
import { useNavigate } from 'react-router-dom';
import {useRef, useState} from "react";
import Svg, {G, Path} from "react-native-svg";
import { Shadow } from 'react-native-shadow-2';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const data = [{
    zhcnName: '霍格沃茨城堡豪华版',
    enusName:'Hogwarts Castle',
    productId:'71043',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qG6FaQ.jpg',
},{
    zhcnName: '陋居攻击',
    enusName:'Attack on The Burrow',
    productId:'75980',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qGcI0O.png',
    // https://imgtu.com/i/qGcI0O
},{
    zhcnName: '新春灯会',
    enusName:'Spring Lantern Festival',
    productId:'80107',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qGT1ot.png',
},{
    zhcnName: '太空探测车',
    enusName:'Attack on The Burrow',
    productId:'31107',
    corverUrl:'https://s1.ax1x.com/2022/03/27/qB4yW9.jpg',
    // https://imgtu.com/i/qGcI0O
},{
    zhcnName: '陋居攻击',
    enusName:'Attack on The Burrow',
    productId:'75980',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qGRzB6.png',
    // https://imgtu.com/i/qGcI0O

},{
    zhcnName: '陋居攻击',
    enusName:'Attack on The Burrow',
    productId:'75980',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qGRzB6.png',
    // https://imgtu.com/i/qGcI0O
},{
    zhcnName: '陋居攻击',
    enusName:'Attack on The Burrow',
    productId:'75980',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qGRzB6.png',
    // https://imgtu.com/i/qGcI0O
},{
    zhcnName: '陋居攻击',
    enusName:'Attack on The Burrow',
    productId:'75980',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qGRzB6.png',
    // https://imgtu.com/i/qGcI0O
},{
    zhcnName: '霍格沃茨城堡豪华版',
    enusName:'Hogwarts Castle',
    productId:'75957',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qG6FaQ.jpg',
},{
    zhcnName: '霍格沃茨城堡豪华版',
    enusName:'Hogwarts Castle',
    productId:'71043',
    corverUrl:'https://s1.ax1x.com/2022/03/24/qG6FaQ.jpg',
}]

const initValue = 390;

export const Card = () => {
    const topVal = useRef(new Animated.Value(initValue)).current;
    let scrollBottom = useRef(0).current;
    let scrollVal = useRef(0).current;
    const [listScroll, setListScroll] = useState(true)
    const navigate = useNavigate();

    function handleClick(item) {
        navigate('/detail',{
            state: { item }
        });
    }

    const panResponder = React.useRef(
        PanResponder.create({
            // onMoveShouldSetPanResponder: (evt, gestureState) => true,
            // onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
            //     true,

            onPanResponderGrant: (evt, gestureState) => {
                scrollVal = scrollBottom;
            },
            // onPanResponderMove: (evt, gestureState) => {
            //     // The most recent move distance is gestureState.move{X,Y}
            //     // The accumulated gesture distance since becoming responder is
            //     // gestureState.d{x,y}
            // },
            onPanResponderRelease: (evt, gestureState) => {
                if(gestureState.dy<0){
                    Animated.timing(topVal,{
                        toValue: 120,
                        duration: 300,
                    }).start(()=>{
                        // setListScroll(false);
                    })
                }else if(gestureState.dy>0){
                    console.log(scrollVal,scrollBottom);
                    if(scrollVal<=0 &&scrollBottom<=0){
                        Animated.timing(topVal,{
                            toValue: initValue,
                            duration: 300,
                        }).start(()=>{
                            // setListScroll(false);
                        })
                    }
                }
            },
        })
    ).current;

    const handleScrollEnd = (e)=>{
        scrollBottom = e.nativeEvent.contentOffset.y;
    }
    return (
        <Animated.View style={[styles.cardDomain,{top:topVal}]} >
            <View>
                <View style={styles.inline}>
                    <Text>编号</Text>
                    <Svg width="12" height="12" viewBox="0 0 90 90" fill="#000" stroke="#000" >
                        <G transform="matrix(1 0 0 1 0 98)">
                            <Path d="M68.9453-61.4258Q68.9453-63.7695 67.3096-65.1123Q65.6738-66.4551 62.9395-66.4551L13.8184-66.5039Q11.084-66.5039 9.44824-65.1611Q7.8125-63.8184 7.8125-61.4746Q7.8125-60.2051 8.30078-59.082Q8.78906-57.959 9.42383-56.6406L32.7637-8.69141Q34.1309-5.9082 35.4248-4.90723Q36.7188-3.90625 38.3789-3.90625Q40.0391-3.90625 41.333-4.90723Q42.627-5.9082 43.9941-8.69141L67.334-56.6406Q67.9688-57.959 68.457-59.0576Q68.9453-60.1562 68.9453-61.4258Z"/>
                        </G>
                    </Svg>
                </View>
            </View>
            <FlatList {...panResponder.panHandlers} scrollEnabled={listScroll} scrollEventThrottle={32} onScroll={handleScrollEnd} showsVerticalScrollIndicator={false}
                      data={data}
                      numColumns={2}
                      renderItem={({item})=><TouchableOpacity onPress={()=>handleClick(item)} style={styles.cardBody}>
                          <Shadow  distance={12} startColor={'#f3f3f3'} viewStyle={{alignSelf: 'stretch'}} offset={[0,4]}>
                              <View style={styles.cardView}>
                                  <ImageBackground source={{ uri: item.corverUrl }} resizeMode="contain">
                                      <View  style={styles.cardContainer}/>
                                  </ImageBackground>
                                  <View style={styles.footer}>
                                      <Text style={styles.desc}># {item.productId}</Text>
                                      <Text style={styles.title} numberOfLines={1}>{item.zhcnName}</Text>
                                  </View>
                              </View>
                          </Shadow>
                      </TouchableOpacity>}
                      keyExtractor={item=>item.productId}
                      ListEmptyComponent={()=><View>
                          <Text>empty</Text>
                      </View>}
                      initialNumToRender={6}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    inline: {
        flexDirection: 'row'
    },
    cardDomain:{
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        // alignItems: 'center',
        position: 'absolute',

        width: screenWidth,
        height: screenHeight - 100,
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    cardTit:{
        fontSize: 16,
        color: '#000',
        fontWeight:'500',
        marginBottom: 10,
    },
    cardBody:{
        overflow: 'hidden',
        flex:1,
        paddingVertical:14,
        marginVertical:-6,
        paddingHorizontal:12,
        marginHorizontal:-4,
    },
    cardView:{
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor:'#fff',
    },
    cardContainer:{
        height: 120,
    },
    footer:{
        backgroundColor: 'rgba(255,255,255,0.9)',
        // flexDirection:'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical:6,
    },
    desc:{
        fontSize: 12,
        lineHeight: 18,
    },
    title:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '500',
    },
    flatlist:{
        backgroundColor: 'red',
        height:400
    }
});
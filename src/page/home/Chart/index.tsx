import * as React from "react";
import {StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView, useColorScheme} from "react-native";
import { Dimensions, ImageBackground } from "react-native";
import {
    LineChart,
} from "react-native-chart-kit";
import {Price} from "../../../components/Price";
import Svg, {
    G,
    Circle,
    Text as TextSvg,
    Rect,
} from 'react-native-svg';

const screenWidth = Dimensions.get("window").width;
export const Chart = () => {
    const priceArr = [ 280, 780, 0, 799]
    const data = {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                data: priceArr,
            }
        ],
    };
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
        fillShadowGradientFrom:'#333',
        fillShadowGradientFromOpacity:0,
        fillShadowGradientFromOffset:0,
        fillShadowGradientTo:'#fff',
        fillShadowGradientToOpacity:0,
        useShadowColorFromDataset: true,
        color: (opacity,index) => `rgba(255, 255, 255, 0.7)`,
        strokeWidth: 3,
        propsForBackgroundLines: {
            stroke:"rgba(255, 255, 255, 0.1)",
            strokeWidth: 2,
            strokeDasharray:[]
        },
        propsForVerticalLabels: {
            fill:'rgba(255,255,255,0.6)',
            fontWeight: '500',
        }
    };
    return <ImageBackground source={{ uri: 'https://s1.ax1x.com/2022/03/26/qdBKVf.png' }} resizeMode="cover" style={styles.chartDomain}>
        <View style={styles.copy}>
            <Text style={styles.tit}>已拥有14套积木</Text>
            <Price price={10987} bigger white/>
        </View>
        <LineChart
            data={data}
            width={screenWidth}
            height={90}
            chartConfig={chartConfig}
            withHorizontalLabels={false}
            withVerticalLabels={true}
            getDotColor={((dot,index)=>index === priceArr.length-1?'#fff':'transparent')}
            renderDotContent={({x, y, index}) => {
                return (
                    <Svg height="200" width={screenWidth}>
                        {
                            index === priceArr.length-1?
                                <G x={x} y={y}>
                                    <G x={0}
                                       y={y<45?34:-34}>
                                        <Rect x={-35} y={-16} rx="18" ry="18" width="70" height="32" fill="#fff"/>
                                        <TextSvg
                                            x={0}
                                            y={5}
                                            textAnchor="middle"
                                            fontWeight="bold"
                                            fontSize="12"
                                            fill="#d72860"
                                        >
                                            ¥1099
                                        </TextSvg>
                                    </G>
                                    <Circle cx={0} cy={0} r={8} opacity={1} fill="#fff" stroke="#d72860" strokeWidth={3} key={index}/>
                                </G> :null
                        }
                    </Svg>
                );
            }}
            withVerticalLines={false}
            bezier
            segments={3}
            style={{
                // paddingTop: 26,
                paddingRight: 0,
                paddingBottom: 20,
                position: 'absolute',
                zIndex: 0,
                top:0,
                left: 0,
            }}
        />
    </ImageBackground>
}

const styles = StyleSheet.create({
    chartDomain:{
        marginVertical: 12,
        
        backgroundColor:'#ccc',
        marginHorizontal: 12,
        borderRadius: 16,
        overflow: 'hidden',
        paddingTop: 16,
        paddingBottom: 16,
    },
    copy:{
        marginHorizontal: 16,
    },
    tit:{
        marginBottom:4,

        fontSize: 12,
        lineHeight: 20,
        color: '#fff',
        fontWeight: '500',
        opacity: 0.6
    },
    background:{
        height: 200,
        position:'absolute',
        top:0,
        left:0,
        zIndex: -1,
    }
})
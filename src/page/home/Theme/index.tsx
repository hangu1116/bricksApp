import * as React from "react";
import {StyleSheet, View, Text, StatusBar, ScrollView, Image, useColorScheme} from "react-native";

const data = [{
    img:'https://s1.ax1x.com/2022/03/27/q0DeSg.png',
    znchName:'Harry Potter™',
    total:12,
    own: 6
},{
    img:'https://s1.ax1x.com/2022/03/27/q0DmlQ.png',
    znchName:'Creator Expert',
    total:12,
    own: 6
},{
    img:'https://s1.ax1x.com/2022/03/27/q0DVfS.png',
    znchName:'Disney™',
    total:12,
    own: 6
},{
    img:'https://s1.ax1x.com/2022/03/27/q0DEY8.png',
    znchName:'Exclusive',
    total:12,
    own: 6
},{
    img:'https://s1.ax1x.com/2022/03/27/q0Dnyj.png',
    znchName:'Creator 3-in-1',
    total:12,
    own: 6
}]
export const Theme =  ()=>{
    return <View style={styles.domain}>
        <Text style={styles.cardTit}>主题套装</Text>
        <ScrollView horizontal={true} // 横向
                    showsHorizontalScrollIndicator={false}>
            <View style={styles.list}>
                {
                    data.map((item,index)=><View style={styles.themeItem}>
                        <Image source={{ uri: item.img }} style={styles.avator}/>
                        <Text style={styles.txt} numberOfLines={1}>{item.znchName}</Text>
                    </View>)
                }
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    domain:{
        marginBottom: 16,
    },
    cardTit:{
        fontSize: 16,
        color: '#fff',
        fontWeight:'bold',
        marginTop: 18,
        marginBottom: 18,
        marginHorizontal: 12,
    },
    list:{
        flexDirection: 'row',
        marginRight: 12,
    },
    themeItem:{
        width: 74,
        marginLeft: 12,
        alignItems: 'center',
    },
    avator:{
        width: 56,
        height:56,
        borderRadius: 28,
        resizeMode: "contain",
        overflow: 'hidden',
        backgroundColor: '#fff'
    },

    txt:{
        marginTop:6,
        fontSize: 12,
        lineHeight: 22,
        fontWeight: '500',
        color:'#fff',
    },
    footer:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    desc:{
        fontSize: 12,
        lineHeight: 18,
        color: '#666',
    }
});
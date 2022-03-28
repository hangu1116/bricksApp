import * as React from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";

export const Price = ({price, bigger, white}:{price:number, bigger?: boolean, white?: boolean}) => {
    return <View style={styles.inline}>
        <Text style={[bigger?styles.smallB:styles.small, white?{color:'#fff'}:null ]}>¥</Text>
        <Text style={[bigger?styles.normalB:styles.normal, white?{color:'#fff'}:null]}>{(price || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')}</Text>
    </View>
}

const styles = StyleSheet.create({
    inline:{
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    small:{
        fontSize: 12,
        lineHeight: 16,
        marginRight: 2,
    },
    smallB:{
        fontSize: 14,
        lineHeight: 22,
        marginRight: 4,
        fontWeight: '500',
    },
    normal:{
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '500',
        letterSpacing: 0.1,
    },
    normalB:{
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.2,
    }
})
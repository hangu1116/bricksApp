import * as React from "react";
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import AutoScaleImage from '../../components/Image/index';
import {OfficialInfo} from "./OfficialInfo";
import {Price} from "../../components/Price";

export const DetailPage = (props) => {
    const [detail, setDetail] = useState(null);
    let location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        setDetail(location.state.item);
    },[])
    if(!detail){
        return null;
    }
    const handleBack = () => {
        navigate('/home');
    }
    return (
        <View style={{position: 'relative', backgroundColor:'#fff'}}>
            <StatusBar/>
            <TouchableOpacity onPress={handleBack} style={styles.navBtn}>
                <AutoScaleImage uri={'https://s1.ax1x.com/2022/03/24/qJv35Q.png'} style={styles.navBtnIcon}/>
            </TouchableOpacity>
            <ScrollView style={{position: 'relative', zIndex: 0}}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.headerBody}>
                    <View>
                        <AutoScaleImage uri={
                            detail.corverUrl
                        } style={styles.img}/>
                    </View>
                </ScrollView>
                <View style={styles.detailBody}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.title}>{detail.zhcnName}</Text>
                            <Text style={styles.desc}>{detail.enusName}</Text>
                        </View>
                        <View style={styles.headerInfo}>
                            <AutoScaleImage uri={'https://s1.ax1x.com/2022/03/24/qJHx3V.png'} style={styles.logo}/>
                            <Text style={styles.desc}>{detail.productId}</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.infoTit}>购买信息</Text>
                        <View style={styles.info}>
                            <View>
                                <Price price={1055}/>
                                <Text style={styles.infoDesc}>2.6折</Text>
                            </View>
                            <View style={styles.infoCopy}>
                                <Text style={styles.infoN}>2021-10-09</Text>
                                <Text style={styles.infoDesc}>乐高旗舰店</Text>
                            </View>
                        </View>
                    </View>
                    <OfficialInfo detail={detail}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    inline:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    inlineBottom:{
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    navBtn:{
        position: 'absolute',
        zIndex: 1,
        top: 40,
        left: 10,
    },
    navBtnIcon:{
        height: 30,
    },
    headerBody:{
        flexDirection: 'row',
    },
    detailBody:{
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    body:{
        marginTop: 22,
        marginBottom: 6,
        backgroundColor: '#eae6ff',
        borderRadius: 12,
        padding: 10,
    },
    info:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    infoTit:{
        fontSize: 12,
        lineHeight: 18,
        color: '#969696',
        marginBottom: 12,
    },
    infoCopy:{
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    infoN:{
        fontSize: 18,
        lineHeight: 18,
        fontWeight: '500'
    },
    infoDesc:{
        fontSize: 12,
        lineHeight: 20,
    },
    title:{
        fontSize: 20,
        lineHeight: 36,
        fontWeight: '500'
    },
    headerInfo:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    desc:{
        fontSize: 12,
        lineHeight: 18,
        color: '#666',
    },
    logo:{
        width: 20,
        // height: 20,
        marginBottom: 8,
    },
    img:{
        height: 380,
    },
});
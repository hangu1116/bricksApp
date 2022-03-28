import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import Svg, {G, Path} from "react-native-svg";

export const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.inline}>
                <Text style={styles.title}>cyj 的积木</Text>
                <Svg width="36" height="36" viewBox="0 0 100 100" fill="#ffffff" stroke="#000" >
                    <G transform="matrix(1 0 0 1 0 84)">
                        <Path className="multicolor-0:systemGreenColor hierarchical-0:tertiary SFSymbolsPreview28CD41"
                              d="M46.2402 4.15039Q54.3457 4.15039 61.4746 1.07422Q68.6035-2.00195 74.0479-7.4707Q79.4922-12.9395 82.5928-20.0684Q85.6934-27.1973 85.6934-35.2539Q85.6934-43.3105 82.5928-50.4395Q79.4922-57.5684 74.0234-63.0371Q68.5547-68.5059 61.4258-71.582Q54.2969-74.6582 46.1914-74.6582Q38.1348-74.6582 31.0059-71.582Q23.877-68.5059 18.457-63.0371Q13.0371-57.5684 9.93652-50.4395Q6.83594-43.3105 6.83594-35.2539Q6.83594-27.1973 9.93652-20.0684Q13.0371-12.9395 18.4814-7.4707Q23.9258-2.00195 31.0547 1.07422Q38.1836 4.15039 46.2402 4.15039Z"/>
                        <Path className="multicolor-1:white hierarchical-1:primary SFSymbolsPreviewFFFFFF"
                              fill="#000"
                              d="M28.5645-35.2051Q28.5645-36.9141 29.6387-37.9883Q30.7129-39.0625 32.4707-39.0625L42.4316-39.0625L42.4316-49.0723Q42.4316-50.7812 43.4814-51.8555Q44.5312-52.9297 46.1914-52.9297Q47.9492-52.9297 48.999-51.8555Q50.0488-50.7812 50.0488-49.0723L50.0488-39.0625L60.1074-39.0625Q61.7676-39.0625 62.8662-37.9883Q63.9648-36.9141 63.9648-35.2051Q63.9648-33.5449 62.8662-32.4951Q61.7676-31.4453 60.1074-31.4453L50.0488-31.4453L50.0488-21.3867Q50.0488-19.7266 48.999-18.6523Q47.9492-17.5781 46.1914-17.5781Q44.5312-17.5781 43.4814-18.6523Q42.4316-19.7266 42.4316-21.3867L42.4316-31.4453L32.4707-31.4453Q30.7129-31.4453 29.6387-32.4951Q28.5645-33.5449 28.5645-35.2051Z"/>
                    </G>
                </Svg>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inline:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    header:{
        marginTop: 22 + 44,
        marginHorizontal: 12,
    },
    title:{
        fontSize: 26,
        lineHeight: 52,
        fontWeight: 'bold',
        color:'#fff'
    },
    desc:{
        fontSize: 12,
        lineHeight: 18,
        color: '#666',
    }
});
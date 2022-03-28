import * as React from "react";
import {StyleSheet, View, Text, StatusBar, Dimensions, useColorScheme} from "react-native";
import {Header} from "./header";
import {Card} from "./card";
import {Chart} from "./Chart";
import {Theme} from "./Theme";
import Drawer from '../../components/Drawer/index';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const screenHeight = Dimensions.get("window").height;
export const HomePage = () => {
    return (
        <View style={{backgroundColor:'#000000', height:screenHeight}}>
            <StatusBar barStyle={'light-content'} />
            <Header/>
            <Chart />
            <Theme/>
            <Card/>
            {/*<Drawer*/}
            {/*    initialDrawerSize={0.64}*/}
            {/*    renderContainerView={() => (*/}
            {/*        <View>*/}
            {/*            <Chart />*/}
            {/*            <Theme/>*/}
            {/*        </View>*/}
            {/*    )}*/}
            {/*    renderInitDrawerView={() => (*/}
            {/*        <View style={{backgroundColor:'#000', height:screenHeight - 100}}>*/}
            {/*            <Card/>*/}
            {/*        </View>*/}
            {/*    )}*/}
            {/*/>*/}
        </View>

    )
}
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image } from 'react-native';
import { fonts, metrics } from "../themes";


export default class Splash extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        setTimeout(()=>{
           this.props.navigation.navigate("Home")
        },2000);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="transparent" translucent />

                <View style={styles.mainPage}>
                    <View>
                        <Image source={require("../images/evon.png")} style={styles.logoImage} resizeMode="center" />
                        <Text style={styles.evon}>evon</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: '#3C64DC',
        justifyContent: 'center',
        alignItems: 'center'
    },
    evon: {
        fontSize: fonts.size.font_31,
        fontWeight: "bold",
        color: 'white', 
        textAlign:"center"
    },
    logoImage: {

        height: metrics.deviceWidth * 0.3,
        width: metrics.deviceWidth * 0.3
    }
});
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, ImageBackground } from 'react-native';
import { fonts, metrics } from "../themes";


export default class Policy extends Component {
    render() {
        return (
           
                <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#3C64DC" }}>
                     <ImageBackground source={require("../images/evon.png")} style={{flex:1, zIndex:1, opacity:0.7}} resizeMode="contain">
                     
                    <View style={styles.fullPage}>
                        {/* <StatusBar backgroundColor="transparent" translucent /> */}

                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                            <Text style={{ textAlign: "center", color: "white", fontSize: fonts.size.font_22 }}>Privacy Policy</Text>
                            <Text>{"\n"}</Text>
                            <Text style={{ textAlign: "center", color: "white", fontSize: fonts.size.font_14 }}> An acronym is a pronounceable word formed from the first letter (or first few letters)
                                    of each word in a phrase or title. Sometimes, the newly combined letters create a new
                                word that becomes a part of everyday language.</Text>

                        </View>

                    </View>
                    </ImageBackground >
                </ScrollView>
           
        );
    }
}





const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        backgroundColor: "#3C64DC",
        margin: metrics.baseMargin,
    },
});
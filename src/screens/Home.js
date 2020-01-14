import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { fonts, metrics } from "../themes";
export default class HomePage extends Component {
    render() {
        return (

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* <StatusBar backgroundColor="transparent" translucent /> */}
                <View style={styles.fullPage}>
                    <View style={styles.firstView}>
                        <Image source={require("../images/evon.png")} style={styles.logoImage} resizeMode="center" />
                        <Text style={styles.logoText}>EVON</Text>
                    </View>

                    <View style={styles.secondView}>
                        <Text style={styles.secondViewText}>Discover upcoming events near you</Text>
                    </View>

                    <View style={styles.thirdView}>
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={{ color: "white", fontSize: fonts.size.font_14 }}>Sign up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signinTouchable}  onPress={() => this.props.navigation.navigate('LogIn')}>
                            <Text style={{ color: "#7ba2d4", fontSize: fonts.size.font_14 }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fourthView}>
                        <Text style={styles.fourthviewText}>Skip for now</Text>
                    </View>


                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        margin: metrics.baseMargin,
    },
    firstView: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    secondView: {
        flex: 0.5,
        justifyContent: "flex-end",

    },
    thirdView: {
        flex: 1,
        justifyContent: "flex-end"
    },
    fourthView: {
        flex: 1,
        justifyContent: "flex-end"

    },
    logoImage: {

        height: metrics.deviceWidth * 0.3,
        width: metrics.deviceWidth * 0.3
    },
    logoText: {
        fontSize: fonts.size.font_26,
        color: "#142f9d"
    },
    secondViewText: {
        fontSize: fonts.size.font_22,
        textAlign: "center",
        color: "silver"
    },
    signupTouchable: {
        height: metrics.deviceHeight * 0.06,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#457ef8",
        borderColor: "#7ba2d4",
        borderWidth: 1,
    },
    signinTouchable: {
        height: metrics.deviceHeight * 0.06,
        marginVertical: 10,
        borderColor: "#7ba2d4",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fourthviewText: {
        textAlign: "center",
        color: "#7ba2d4",
        fontSize: fonts.size.font_14
    }


});
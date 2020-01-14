import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { fonts, metrics } from "../themes";

export default class LoginPage extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.fullPage}>

                    <View style={styles.firstView}>
                        <Image source={require("../images/evon.png")} style={styles.logoImage} />
                    </View>
                    <View style={styles.secondView}>
                        <TextInput placeholder="Email" placeholderTextColor="silver" returnKeyType="next" style={styles.inputTextFields} />
                        <TextInput placeholder="password" placeholderTextColor="silver" returnKeyType="go" secureTextEntry style={styles.inputTextFields} />
                        <TouchableOpacity style={styles.loginTouchable}>
                            <Text style={styles.loginTouchableText}>login</Text>
                        </TouchableOpacity>
                        <Text style={styles.forgetPasswordText}>Forget Password ?</Text>


                    </View>




                    <View style={styles.thirdView}>

                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderColor: "silver", flex: 1 }}>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'center' }}>
                                <Text style={{ color: "silver", fontSize: fonts.size.font_14 }}>or</Text>
                            </View>
                            <View style={{ borderWidth: 1, borderColor: "silver", flex: 1 }}>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: "row", marginVertical: metrics.smallMargin }}>
                            <View style={{ flex: 0.1, alignItems:"center", backgroundColor:"#415D8B"}}>
                                <Image source={require("../images/fb.png")} style={{ height: metrics.deviceHeight * 0.06, width: metrics.deviceWidth * 0.09 }} />
                            </View>
                            <View style={{ flex: 0.9, backgroundColor: "#4471AD", justifyContent: "center" }}>
                                <TouchableOpacity>
                                    <Text style={styles.facebookLoginTouchability}>Log in with Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: "row", borderWidth: 1, borderColor: "silver"}}>
                            <View style={{ flex: 0.1, borderColor:"silver", borderWidth:0.5, alignItems:"center"}}>
                                <Image source={require("../images/googleImg.png")} style={{ height: metrics.deviceHeight * 0.06, width: metrics.deviceWidth * 0.09 }} />
                            </View>
                            <View style={{ flex: 0.9, justifyContent: "center"}}>
                                <TouchableOpacity>
                                    <Text style={styles.googleLoginTouchability}>Log in with Google</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>


                    <View style={styles.fourthView}>
                        <Text style={{ color: "silver", fontSize: fonts.size.font_14 }}><Text>Dont have an account? </Text>
                            <Text style={{ color: "#457ef8", fontWeight: "bold", fontSize: fonts.size.font_14 }}onPress={() => this.props.navigation.navigate('SignUp')}>Sign up</Text></Text>
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
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    secondView: {
        flex: 1,
        justifyContent: "center",

    },
    thirdView: {
    },
    fourthView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoImage: {
        height: metrics.deviceWidth * 0.2,
        width: metrics.deviceWidth * 0.2
    },
    inputTextFields:{
        backgroundColor: "#ebebe0", 
        fontSize:fonts.size.font_14, 
        marginVertical:metrics.tinyMargin,
        color:"#3C64DC"
    },
    loginTouchable: {
        height: metrics.deviceHeight * 0.06,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#457ef8",
        borderColor: "#7ba2d4",
        borderWidth: 1,
        marginTop: 12
    },
    loginTouchableText: {
        color: "white",
        fontSize: fonts.size.font_14,
        fontWeight: "bold",
        // height: metrics.deviceHeight * 0.06,
       
    },
    forgetPasswordText: {
        textAlign: "center",
        color: "#4973E1",
        marginTop: metrics.tinyMargin,
        fontWeight: "bold",
        fontSize:fonts.size.font_14
    },
    facebookLoginTouchability: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: fonts.size.font_14,
        // height: metrics.deviceHeight * 0.06
    },
    googleLoginTouchability: {
        textAlign: "center",
        color: "silver",
        fontWeight: "bold",
        fontSize: fonts.size.font_14,
        // height: metrics.deviceHeight * 0.06
    }

});
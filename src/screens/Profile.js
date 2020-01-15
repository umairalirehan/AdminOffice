import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, ImageBackground } from 'react-native';
import { fonts, metrics } from "../themes";
import { Icon, Card } from "native-base";


export default class Profile extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                {/* <StatusBar backgroundColor="transparent" translucent /> */}
                <ImageBackground source={require("../images/hd2.jpg")} style={{ flex: 1, zIndex: 1 }} resizeMode="cover">
                    <View style={styles.fullPage}>
                        <View style={styles.firstView}>

                            <Text style={styles.mainText}>Profile</Text>
                        </View>

                        <View style={styles.secondView}>
                            <Image source={require("../images/singleUser.png")} style={styles.userImage} resizeMode="cover" />
                        </View>


                        <View style={styles.fourthView}>

                            <View style={styles.nameView}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: fonts.size.font_22 }}>John Deo</Text>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="user" type="AntDesign" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Applicant Name</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>John Deo</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="user-friends" type="FontAwesome5" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Father/Husband</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>John Deo</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="idcard" type="AntDesign" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>CNIC</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>35401747838389</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="email" type="MaterialCommunityIcons" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Email</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>John@gmail.com</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="mobile" type="Entypo" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Phone</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>0009876543</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="phone" type="AntDesign" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Office</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>04286974563</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="home" type="AntDesign" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Residence</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Lahore</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: "#acacac", height: 1.5, marginVertical: metrics.baseMargin }}>
                            </View>


                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="user" type="AntDesign" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Nominee Name</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Mr Dee</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="user-friends" type="FontAwesome5" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Father/Husband</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>John Dee</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="idcard" type="AntDesign" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Nominee CNIC</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>354013748875</Text>
                                </View>
                            </View>

                            <View style={styles.staticInfoView}>
                                <View style={styles.iconView}>
                                    <Icon name="relative-scale" type="MaterialCommunityIcons" style={styles.icon} />
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Relationship</Text>
                                </View>

                                <View style={styles.applicantStaicView}>
                                    <Text style={styles.applicantStaicInfo}>Husband</Text>
                                </View>
                            </View>


                            <View style={{ backgroundColor: "#acacac", height: 1.5, marginVertical: metrics.baseMargin }}>
                            </View>

                            <View>
                                <Text style={{ color: "white", fontSize: fonts.size.font_22, fontWeight: "bold", marginVertical: metrics.baseMargin }}>Payment Detail</Text>
                                <Text style={{ color: "white", fontSize: fonts.size.font_16, fontWeight: "bold", textAlign: "center", marginVertical: metrics.tinyMargin }}>LUMSUMP Payment (100%)</Text>
                                <Text style={{ color: "white", fontSize: fonts.size.font_16, fontWeight: "bold", textAlign: "center", marginVertical: metrics.tinyMargin }}>Instalment</Text>
                            </View>

                            <View style={styles.signatureView}>
                                <View style={styles.signatureChildView}>
                                    <Text style={styles.signatureText}>Applicant Signature</Text>
                                </View>
                                <View style={styles.signatureChildView}>
                                    <Image source={require("../images/signature.jpg")} style={styles.signatureImage} resizeMode="center" />
                                </View>

                            </View>

                            <View style={styles.signatureView}>
                                <View style={styles.signatureChildView}>
                                    <Text style={styles.signatureDateText}>Date</Text>
                                </View>
                                <View style={styles.signatureChildView}>
                                    <Text style={styles.signatureDateText}>15/01/2020</Text>
                                </View>

                            </View>

                            <View style={{ backgroundColor: "#acacac", height: 0.5, marginVertical: metrics.baseMargin }}>
                            </View>

                            <View style={styles.signatureView}>
                                <View style={styles.signatureChildView}>
                                    <Text style={styles.signatureText}>Sales Officer</Text>
                                </View>
                                <View style={styles.signatureChildView}>
                                    <Image source={require("../images/signature.jpg")} style={styles.signatureImage} resizeMode="center" />
                                </View>

                            </View>

                            <View style={styles.signatureView}>
                                <View style={styles.signatureChildView}>
                                    <Text style={styles.signatureDateText}>Date</Text>
                                </View>
                                <View style={styles.signatureChildView}>
                                    <Text style={styles.signatureDateText}>15/01/2020</Text>
                                </View>

                            </View>




                        </View>


                    </View>
                </ImageBackground>
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
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3C64DC",
        borderBottomRightRadius: 60,
        height: metrics.deviceHeight * 0.25,
        marginTop: metrics.baseMargin,

    },
    secondView: {
        zIndex: 1,
        flex: 1,
        alignItems: "center",
        marginTop: -40,


    },
    nameView: {
        backgroundColor: "#3C64DC",

        alignItems: "center",
        borderWidth: 1,
        borderColor: "#3C64DC",

    },
    fourthView: {
        flex: 1,
        marginTop: 10


    },
    mainText: {
        fontSize: fonts.size.font_26,
        color: "white",
        fontWeight: "bold",
    },
    userImage: {
        height: metrics.deviceWidth * 0.3,
        width: metrics.deviceWidth * 0.3,
        backgroundColor: "silver",
        borderWidth: 1,
        borderRadius: 150,



    },
    staticInfoView: {
        borderRadius: 30,
        borderWidth: 2,
        backgroundColor: "#3C64DC",
        borderColor: "#3C64DC",
        flexDirection: "row",
        marginTop: metrics.smallMargin,

    },
    iconView: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },
    applicantStaicView: {
        flex: 0.4,
        justifyContent: "center",

    },
    icon: {
        color: "white",
        fontSize: fonts.size.font_18
    },
    applicantStaicInfo: {
        color: "white",
        fontWeight: "bold",
        fontSize: fonts.size.font_14
    },
    signatureView: {
        flex: 1,
        flexDirection: "row"
    },
    signatureChildView: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    signatureText: {
        color: "white",
        fontWeight: "bold",
        fontSize: fonts.size.font_16
    },
    signatureImage: {
        height: metrics.deviceHeight * 0.2,
        width: metrics.deviceWidth * 0.4
    },
    signatureDateText:{
        color: "white",
         fontWeight: "bold", 
         fontSize: fonts.size.font_14
    },
    

});
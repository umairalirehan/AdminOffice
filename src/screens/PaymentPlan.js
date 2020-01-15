import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, ImageBackground, FlatList } from 'react-native';
import { fonts, metrics } from "../themes";
import { Icon } from "native-base";


export default class PaymentPlan extends Component {
    state = {
        players: [{ imageSource: "../images/nature.jpg", imageName: "player1", value: 10, points: 10 },
        { imageSource: "../images/nature.jpg", imageName: "player2", value: 10, points: 10 },
        ]
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.fullPage}>
                    <View style={styles.firstView}>
                        <Text style={{ fontSize: fonts.size.font_14, color: "#3C64DC", fontWeight: "bold" }}>Payment Plan</Text>
                    </View>

                    <View style={styles.flexHeader}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>R.Plot Size</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>Selling Price</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>Down Payment</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>42 Monthly Instalment</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>7 BiAnual Payment</Text>
                        </View>
                    </View>

                    <View style={styles.flexHeader}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>Merla</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                    </View>

                    <View>
                        <FlatList
                            data={this.state.players}
                            renderItem={({ item }) =>
                                <View style={styles.flexHeader}>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.imageName}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.imageName}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.value}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.points}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.points}</Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={item => item.imageName}
                        />
                    </View>

                    <View style={{ backgroundColor: "#3C64DC", height: 1.5, marginVertical: metrics.baseMargin }}>
                    </View>

                    <View style={styles.flexHeader}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>Merla</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.flatListTextColorsHeader}>PKR</Text>
                        </View>
                    </View>

                    <View>
                        <FlatList
                            data={this.state.players}
                            renderItem={({ item }) =>
                                <View style={styles.flexHeader}>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.imageName}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.imageName}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.value}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.points}</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                        <Text style={styles.flatListTextColors}>{item.points}</Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={item => item.imageName}
                        />
                    </View>


                    

                </View>
            </ScrollView>

        );
    }
}



const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        margin: metrics.smallMargin,
        // backgroundColor: "silver",
    },
    firstView: {
        // flex: 1,
        alignItems: "center",
        marginVertical: metrics.baseMargin,
    },
    flatListTextColors: {
        fontWeight: "bold",
        color: "#acacac",
        borderRightColor: "#acacac",
        borderRightWidth: 1,
        textAlign: "center",
        fontSize: fonts.size.font_12
    },
    flatListTextColorsHeader: {
        fontWeight: "bold",
        color: "#3C64DC",
        // borderRightColor: "#acacac",
        // borderRightWidth: 1,
        borderWidth: 0.5,

        textAlign: "center",
        fontSize: fonts.size.font_12
    },
    flexHeader: {

        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        marginTop: 0.5

        // borderTopColor: "#acacac"
    }
});
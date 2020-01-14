import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, ImageBackground } from 'react-native';
import { fonts, metrics } from "../themes";
import Carousel from "react-native-snap-carousel";

export default class AppCarousel extends Component {
    state = {
        players: [{ imageSource: require("../images/1.jpg"), imageName: "player1", value: 10, points: 10 },
        { imageSource: require("../images/2.jpg"), imageName: "player2", value: 10, points: 10 },
        { imageSource: require("../images/3.jpg"), imageName: "player3", value: 10, points: 10 },
        { imageSource: require("../images/4.jpg"), imageName: "player4", value: 10, points: 10 },
        { imageSource: require("../images/5.jpg"), imageName: "player2", value: 10, points: 10 },
        { imageSource: require("../images/6.jpg"), imageName: "player3", value: 10, points: 10 },
        { imageSource: require("../images/7.jpg"), imageName: "player4", value: 10, points: 10 },
        { imageSource: require("../images/8.jpg"), imageName: "player2", value: 10, points: 10 },
        { imageSource: require("../images/9.jpg"), imageName: "player1", value: 10, points: 10 },
        { imageSource: require("../images/10.png"), imageName: "player2", value: 10, points: 10 },

        { imageSource: require("../images/1.jpg"), imageName: "player1", value: 10, points: 10 },
        { imageSource: require("../images/2.jpg"), imageName: "player2", value: 10, points: 10 },
        { imageSource: require("../images/3.jpg"), imageName: "player3", value: 10, points: 10 },
        { imageSource: require("../images/4.jpg"), imageName: "player4", value: 10, points: 10 },
        { imageSource: require("../images/5.jpg"), imageName: "player2", value: 10, points: 10 },
        { imageSource: require("../images/6.jpg"), imageName: "player3", value: 10, points: 10 },
        { imageSource: require("../images/7.jpg"), imageName: "player4", value: 10, points: 10 },
        { imageSource: require("../images/8.jpg"), imageName: "player2", value: 10, points: 10 },
        { imageSource: require("../images/9.jpg"), imageName: "player1", value: 10, points: 10 },
        { imageSource: require("../images/10.png"), imageName: "player2", value: 10, points: 10 },
        ]
    }

    _renderItem({ item, index }) {
        return (
            <View style={{ flex: 1}}>
                <Image source={item.imageSource} style={{ height: metrics.deviceWidth * 0.5,  width: metrics.deviceWidth * 0.5 }} resizeMode="center" />
            </View>
        );
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#3C64DC" }}>
                <View style={styles.fullPage}>
                    
                    <View style={{ flex: 1 }}>
                        <Carousel layout={'default'}
                            ref={ref => this.Carousel = ref}
                            data={this.state.players}
                            renderItem={this._renderItem}
                            sliderWidth={metrics.deviceWidth * 0.9 }
                            itemWidth={metrics.deviceWidth * 0.5 }
                        />
                    </View>

                    <View style={{ flex: 1, justifyContent:"center", alignItems:"center" }}>
                        <Carousel layout={"stack"}
                            ref={ref => this.Carousel = ref}
                            data={this.state.players}
                            renderItem={this._renderItem}
                            sliderWidth={metrics.deviceWidth * 0.9 }
                            itemWidth={metrics.deviceWidth * 0.5 }
                        />
                    </View>

                    <View style={{ flex: 1, justifyContent:"center", alignItems:"center"  }}>
                        <Carousel layout={"tinder"}
                            ref={ref => this.Carousel = ref}
                            data={this.state.players}
                            renderItem={this._renderItem}
                            sliderWidth={metrics.deviceWidth * 0.9 }
                            itemWidth={metrics.deviceWidth * 0.5 }
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
        backgroundColor: "#3C64DC",
        margin: metrics.baseMargin,
    },
});
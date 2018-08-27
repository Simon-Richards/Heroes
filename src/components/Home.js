import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';

class Home extends Component {

    render() {
        return (
            <ImageBackground style={ styles.componentStyle } source={{ uri: "https://firebasestorage.googleapis.com/v0/b/heroes-329b8.appspot.com/o/background.jpg?alt=media&token=0ae5fbc8-8c14-4a3d-925d-289627e83df5" }}>
                <View style={styles.buttonContainerStyle}>
                    <Button onPress={() => Actions.selectHero()} style={styles.beHeroButtonStyle} buttonTextStyle={styles.buttonTextStyle}>Be a Hero!</Button>
                </View>
                <View style={styles.buttonContainerStyle}>
                    <Button onPress={() => Actions.heroOverview()} style={styles.findHeroButtonStyle} buttonTextStyle={styles.buttonTextStyle}>Find a Hero!</Button>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    componentStyle: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#E1F5FE',
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    buttonContainerStyle: {
        height: 70,
        width: 200
    },
    beHeroButtonStyle: {
        paddingTop: 15,
        backgroundColor: '#6F9',
        borderColor: '#000'
     },
     findHeroButtonStyle: {
        paddingTop: 15,
        backgroundColor: '#FAF',
        borderColor: '#000'
    },
    buttonTextStyle: {
        color: '#000'
    }
};

export default Home;

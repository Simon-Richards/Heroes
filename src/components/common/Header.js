// Import libraries for making component
import React from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle } = styles;

    return ( 
    <View style={styles.viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const paddingTop = Platform.select({
    ios: { paddingTop: 25 },
    android: { paddingTop: 0 }
  });

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: (Platform.OS === 'ios') ? 18 : 0,
        height: 60,
        alignItems: 'center', //horizontal alignment
        justifyContent: 'center', //vertical alignment
        backgroundColor: '#EEE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#333',
        //textAlign: 'center'
    }
});

// Make the component available to other parts of the app
export { Header };

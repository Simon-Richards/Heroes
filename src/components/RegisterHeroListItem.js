import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'; 
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { CardSection, Card, Button } from './common';
import {selectHero} from '../actions';

class RegisterHeroListItem extends Component {

    onButtonPress() {
        console.log(this.props.hero.item.name);
        this.props.selectHero(this.props.hero.item.name);
        Actions.createProfile();
    }

    render() {
        const { name, photo_url, description } = this.props.hero.item;
        console.log(this.props.hero.item.name);
        return ( 
            <Card style={{borderWidth: 1, borderBottomWidth: 1, borderColor: '#4D86AC'}}>
                <CardSection style={{backgroundColor: '#9EF', borderColor: '#4D86AC'}}>
                    <View>
                        <Image
                            style={{ width: 150, height: 90 }}
                            source={{ uri: photo_url }} 
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTitleStyle}>{name}</Text>
                        <View style={styles.buttonStyle}>
                            <Button style={{ marginLeft: 0 }} onPress={() => this.onButtonPress()} buttonTextStyle={styles.buttonTextStyle}>Select Hero</Button>
                        </View>
                    </View>
                </CardSection>

                <CardSection style={{backgroundColor: '#9EF', borderColor: '#4D86AC'}}>
                    <Text>{description}</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 20
    },
    headerTitleStyle: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold'
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 300
    },
    buttonStyle: {
        height: 40,
        width: 120
    },
    buttonTextStyle: {
        paddingTop: 8,
        paddingBottom: 0
    }
};

export default connect(null, {selectHero})(RegisterHeroListItem);

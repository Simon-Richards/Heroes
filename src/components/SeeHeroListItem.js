import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'; 
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';
import { selectHero } from '../actions';

class SeeHeroListItem extends Component {

    onButtonPress() {
        console.log(this.props.hero.item.name);
        this.props.selectHero(this.props.hero.item.name);
        Actions.seeHeroes();
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
        justifyContent: 'center',
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
        marginLeft: 0,
        padding: 5,
        alignSelf: 'flex-start'
    },
    descriptionStyle: {

    }
};

export default connect(null, { selectHero })(SeeHeroListItem);

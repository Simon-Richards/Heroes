import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'; 
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

class ListItem extends Component {

    onButtonPress() {
        console.log(this.props.hero.item.name);
        this.props.selectHero(this.props.hero.item.name);
        Actions.seeHeroes();
    }

    render() {
        const { username, email, heroName, description } = this.props.hero.item;
        let photoUrl = "https://firebasestorage.googleapis.com/v0/b/heroes-329b8.appspot.com/o/heroes.jpg?alt=media&token=44a3f784-53b1-4351-a2fc-f1a53fbc1cf0";
        if (heroName === "Ragnar Lodbrok") {
            photoUrl = "https://firebasestorage.googleapis.com/v0/b/heroes-329b8.appspot.com/o/ragnar_logo.jpeg?alt=media&token=868108f4-818f-432e-a260-478da1a8d63e";
        } else if (heroName === "Batman") {
            photoUrl = "https://firebasestorage.googleapis.com/v0/b/heroes-329b8.appspot.com/o/batmna_logo.jpg?alt=media&token=2efa0700-d8cd-41e2-bfa5-ab4896b0d5ac";
        } else if (heroName === "Ironman") {
            photoUrl = "https://firebasestorage.googleapis.com/v0/b/heroes-329b8.appspot.com/o/ironman_logo.jpg?alt=media&token=e7ee79bb-81b0-4a87-ae14-9fddb58481f7";
        } else if (heroName === "Young Goku") {
            photoUrl = "https://firebasestorage.googleapis.com/v0/b/heroes-329b8.appspot.com/o/goku_icon_1.png?alt=media&token=5bf660e9-e764-4f86-8134-13fc5ee9b1c4";
        }
        
        console.log(this.props.hero.item.name);
        return ( 
            <Card style={{ borderColor: '#000', borderBottomWidth: 1 }}>
                <CardSection style={{backgroundColor: '#9EF', borderColor: '#4D86AC'}}>
                    <View>
                        <Image
                            style={{ width: 90, height: 70 }}
                            source={{ uri: photoUrl }} 
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.nameStyle}>{username}</Text>
                        <Text style={styles.emailStyle}>{email}</Text>
                    </View>
                </CardSection>

                <CardSection style={{backgroundColor: '#9EF'}}>
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
        marginLeft: 15,
    },
    nameStyle: {
        fontSize: 18,
        color: '#222',
        fontWeight: 'bold'
    },
    emailStyle: {
        fontSize: 15,
        color: '#222'
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

export default ListItem;

import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import SeeHeroListItem from './SeeHeroListItem';

class RegisterHero extends Component {
    renderRow(hero) {
        return <SeeHeroListItem hero={hero} />;
    }

    render() {
        console.log(this.props.heroes);
        return (
            <View style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FlatList 
                data={this.props.heroes}
                renderItem={this.renderRow}
                keyExtractor={(hero) => hero.id.toString()}
            />
            </View>

        );
    }
}

const mapStateToProps = state => {
    //console.log(state);
    return { heroes: state.heroes2 };
};

export default connect(mapStateToProps)(RegisterHero);
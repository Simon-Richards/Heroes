import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { heroFetch } from '../actions';
import ListItem from './ListItem';

class SeeHeroes extends Component {
    componentWillMount() {
        this.props.heroFetch();

        //this.createDataSource();
    }

    createDataSource({ heroes }) {
        this.props.heroFetch();
    }

    renderRow(hero) {
        return <ListItem hero={hero} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.heroes}
                renderItem={this.renderRow}
                keyExtractor={employee => employee.uid}
            />
        );
    }
}

const mapStateToProps = state => {
    const heroes = _.map(state.heroList, (val, uid) => {
        return { ...val, uid };
    });
    return { heroes };
    //const heroes = state.heroList;
    //return { heroes };
};

export default connect(mapStateToProps, { heroFetch })(SeeHeroes);

import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { profileUpdate, profileCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class CreateProfile extends Component {
    onButtonPress() {
        const { heroName, username, description } = this.props;
        console.log("Name to be submitted: " + username);
        //const email = "myemail@whatever";
        this.props.profileCreate({ username, description, heroName: heroName || 'Batman' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Your name"
                        value={this.props.username} 
                        onChangeText={text => this.props.profileUpdate({ prop: 'username', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        height={{ height: 100 }}
                        label="Bio"
                        placeholder="Tell us about yourself" 
                        value={this.props.description}
                        onChangeText={text => this.props.profileUpdate({ prop: 'description', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTextStyle}>Hero</Text>
                    <Picker
                        style={{ flex: 2 }}
                        selectedValue={this.props.heroName}
                        onValueChange={heroName => this.props.profileUpdate({ prop: 'heroName', value: heroName })}    
                    >
                        <Picker.Item label="Ragnar Lodbrok" value="Ragnar Lodbrok" />
                        <Picker.Item label="Batman" value="Batman" />
                        <Picker.Item label="Ironman" value="Ironman" />
                        <Picker.Item label="Young Goku" value="Young Goku" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
};

const mapStateToProps = (state) => {
    const { username, description, heroName } = state.registerHero;
    console.log(username);
    return { username, description, heroName };
};

export default connect(mapStateToProps, { profileUpdate, profileCreate })(CreateProfile);

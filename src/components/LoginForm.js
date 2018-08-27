import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Keyboard, Image } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, ProgressIndicator } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        Keyboard.dismiss();
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white', height: 50}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    showLoading() {
        if (this.props.loading) {
            return (
                <ProgressIndicator />
            )
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )
    }

    render() {
        return (
            <View style={{ }}>
            <Card style={{ }}>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="name@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry 
                        label="Password" 
                        placeholder="**********" 
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    {this.showLoading()}
                </CardSection>

                {this.renderError()}

            </Card>
            <View >
                <Image
                    style={styles.imageStyle}
                    source={{ uri: "https://firebasestorage.googleapis.com/v0/b/heroes-329b8.appspot.com/o/hero_home.png?alt=media&token=ac8ea847-8c07-4dc8-999f-741f5af777d9" }} 
                />
            </View>
            </View>
        );
    }
}

const styles = {
    imageStyle: {
        height: 350, 
        alignSelf: 'stretch', 
        resizeMode: 'cover', 
        marginTop: 5
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

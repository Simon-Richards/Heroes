import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyB8KMuwGcD3-aMWokbdXxhkRJ-IQhc-c_M",
            authDomain: "heroes-329b8.firebaseapp.com",
            databaseURL: "https://heroes-329b8.firebaseio.com",
            projectId: "heroes-329b8",
            storageBucket: "heroes-329b8.appspot.com",
            messagingSenderId: "730744725754"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;

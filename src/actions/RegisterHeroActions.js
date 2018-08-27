import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'; 

export const selectHero = (name) => {
    return {
        type: 'hero_selected',
        payload: name
    };
};

export const profileUpdate = ({ prop, value }) => {
    return {
        type: "profile_update",
        payload: {prop, value}
    }
};

 export const profileCreate = ({ username, description, heroName }) => {
     console.log("action dispatched");
    const { email } = firebase.auth().currentUser;
    return (dispatch) => {
        firebase.database().ref('/heroes') 
        .push({ username, description, heroName, email })
        .then(() => {
            console.log("User Added apparently");
            dispatch({type: 'profile_create'});
            Actions.pop();   
        }); 
    };
 };

export const heroFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/heroes')
            .on('value', snapshot => {
                console.log("immediately returned from database");
                console.log(snapshot.val());
                dispatch({ type: "heroes_fetch_success", payload: snapshot.val() });
            });
    };
};
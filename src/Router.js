import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SelectHero from './components/SelectHero';
import CreateProfile from './components/CreateProfile';
import SeeHeroes from './components/SeeHeroes';
import HeroOverview from './components/HeroOverview';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>

                <Stack key="auth">
                    <Scene key="login" component={LoginForm} title="Heroes" navigationBarStyle={styles.toolbarStyle} initial />
                </Stack>

                <Stack key="main">
                    <Scene 
                        rightButtonStyle={styles.rightButtonStyle}
                        rightButtonTextStyle={styles.rightButtonTextStyle}
                        rightTitle="Log Out"
                        onRight={() => {
                            firebase.auth().signOut();
                            Actions.login(); 
                        }}
                        key="profile" 
                        component={Home} 
                        title="Heroes"
                        navigationBarStyle={styles.toolbarStyle}
                        initial 
                    />
                    
                    <Scene 
                        key="selectHero" 
                        component={SelectHero} 
                        title="Become a Hero" 
                        navigationBarStyle={styles.toolbarStyle} 
                        backButtonTextStyle={styles.backButtonTextStyle} l
                        eftButtonTextStyle={styles.backButtonTextStyle}
                    />
                    <Scene key="createProfile" component={CreateProfile} title="Create Profile" navigationBarStyle={styles.toolbarStyle} />
                    
                    <Scene 
                        rightButtonStyle={styles.rightButtonStyle}
                        rightButtonTextStyle={styles.rightButtonTextStyle}
                        rightTitle="Find Hero"
                        onRight={() => Actions.seeHeroes()}
                        key="heroOverview" 
                        component={HeroOverview} 
                        title="Hero Overview" 
                        navigationBarStyle={styles.toolbarStyle}
                    />
                    <Scene key="seeHeroes" component={SeeHeroes} title="View Heroes" navigationBarStyle={styles.toolbarStyle} />
                </Stack>
            </Stack>     
        </Router>
    );
};

const styles= {
    toolbarStyle: {
        backgroundColor: '#4D86AC'
    },
    rightButtonStyle: {
        right: 0
    },
    rightButtonTextStyle: {
        color: '#000'
    },
    backButtonTextStyle: {
        color: '#000'
    }
};

export default RouterComponent;
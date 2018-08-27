import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterHeroReducer from './RegisterHeroReducer';
import HeroListReducer from './HeroListReducer';
import HeroReducer from './HeroReducer';
import Hero2Reducer from './Hero2Reducer';

export default combineReducers({
    auth: AuthReducer,
    registerHero: RegisterHeroReducer,
    heroList: HeroListReducer,
    heroes: HeroReducer,
    heroes2: Hero2Reducer
});

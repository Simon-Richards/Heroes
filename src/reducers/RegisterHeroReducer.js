const INITIAL_STATE = {
    heroName: '',
    username: '',
    description: '',
    photoUrl: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "hero_selected":
            return { ...state, heroName: action.payload };
        case "profile_update":
            return { ...state, [action.payload.prop]: action.payload.value }
        case "profile_create":
            return {INITIAL_STATE}
        default:
            return state;
    }
};
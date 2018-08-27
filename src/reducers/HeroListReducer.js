const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "heroes_fetch_success":
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}
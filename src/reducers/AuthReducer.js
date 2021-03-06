
const INITIAL_STATE = {
    email: '', 
    password: '',  
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);

    switch (action.type) {
        case "email_changed":
            return { ...state, email: action.payload };
        case "password_changed":
            return { ...state, password: action.payload};
            case "login_user":
            return { ...state, loading: true, error: ''};
        case "login_user_success":
            console.log(action.payload);
            return {...state, 
                user: action.payload, 
                error: '', 
                loading: false,
                email: '',
                password: ''
            };
        case "login_user_fail":
            return {...state, error: 'Authentication Failed.', password: '', loading: false};
        default:
            return state;
    }
}
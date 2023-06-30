
const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
    
    return {
        ...state,
        token: action.payload.token,
    }
    case "GET_USER":
        return {
            ...state,
            user: action.payload,

    };
    case "LOGOUT":
        return {
            ...state,
            user: null,
            token: null

    };
    case "NEW_USER":
    return {
        ...state,
        user: action.payload,
    }
    default:
        return state;
}
}

    export default users;
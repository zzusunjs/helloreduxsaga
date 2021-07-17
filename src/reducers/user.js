const initUserState = {
    user: null
}

const userReducer = (state = initUserState, action) => {
    switch(action.type){
        case 'SET_USER':
            const {payload} = action;
            return {...state, user: payload}
        default:
            return state;
    }
}

export default userReducer;
const initUserState = {
    user: null
}

const userReducer = (state = initUserState, action) => {
    switch(action.type){
        case 'SET_USER':
            const {user} = action;
            return {...state, user}
        default:
            return state;
    }
}

export default userReducer;
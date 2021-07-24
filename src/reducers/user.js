
const userReducer = (state = '', action) => {
    switch(action.type){
        case 'SET_USER':
            const {name} = action;
            console.log('set_user', name);
            return name;
        default:
            return state;
    }
}

export default userReducer;
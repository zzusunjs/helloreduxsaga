const counterReducer = (state = 0, action) => {
    const number = action.payload ? action.payload : 1;
    switch(action.type){
        case 'INCREASEMENT':
            return state + number;
        case 'DESCREASEMENT':
            return state - number;
        default:
            return state;
    }
}

export default counterReducer
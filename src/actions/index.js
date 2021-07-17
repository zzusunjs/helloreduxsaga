export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';

export const getUser = (user_id) => {
    return {
        type: 'GET_USER',
        payload: user_id
    }
}

export const setUser = (parameter) => {
    return {
        type: 'SET_USER',
        payload: parameter
    }
}

export const increasement = (number) => {
    return {
        type: 'INCREASEMENT',
        payload: number
    }
}

export const descreasement = (number) => {
    return {
        type: 'DESCREASEMENT',
        payload: number
    }
}
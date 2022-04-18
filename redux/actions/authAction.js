//set total
export const setToken = (payload) => {
    return {
        type: 'SET_TOKEN',
        payload
    }
}
//set into list action
export const setUser = (payload) => {
    return {
        type: 'SET_USER',
        payload
    }
}
//add cart action
export const removeToken = () => {
    return {
        type: 'UNSET_TOKEN',
    }
}
let initialState = {
    token : null,
    user : {}
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN': {
            return { 
                token : action.payload,
                user : {...state.user}
            }
        }
        case 'UNSET_TOKEN': {
            return { 
                token : null,
                user : {}
            }
        }
        case 'SET_USER': {
            return { 
                token : state.token,
                user : {...action.payload}
            }
        }
        default:
            return state;
    }


}

export default authReducer;
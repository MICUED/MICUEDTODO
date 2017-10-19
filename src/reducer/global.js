let initialState = {
    hasLogin: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_IN": {
            return { ...state, hasLogin: true }
        }
        case "LOGIN_OUT": {
            return { ...state, hasLogin: true }
        }
        default: {
            return state
        }
    }
}
const initialState = {
    tasks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'BUS': {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        default: {
            return state
        }
    }
}
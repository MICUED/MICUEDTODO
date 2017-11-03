const initialState = {
    tasks: [],
    counts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'BUS': {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case 'COUNTS': {
            return {
                ...state,
                counts: action.counts
            }
        }
        default: {
            return state
        }
    }
}
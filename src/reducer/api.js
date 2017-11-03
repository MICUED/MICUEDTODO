const initialState = {
<<<<<<< HEAD
    tasks: [],
    counts: []
=======
    tasks: []
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'BUS': {
            return {
                ...state,
                tasks: action.tasks
            }
        }
<<<<<<< HEAD
        case 'COUNTS': {
            return {
                ...state,
                counts: action.counts
            }
        }
=======
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
        default: {
            return state
        }
    }
}
import { AppNavigator } from "../routerConfig.js"

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

initialState.hasLogin = false
initialState.userName = ''

export default (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state) || state;
    switch (action.type) {
        case "LOGININ": {
            return {
                ...nextState,
                hasLogin: true,
                userName: action.userName
            }
        }
        case "LOGINOUT": {
            return {
                ...nextState,
                hasLogin: false
            }
        }
        default: {
            return nextState
        }
    }
}
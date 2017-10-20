import {
    Platform,
    Dimensions
} from 'react-native'
export default {
    statusBarHieght: Platform.OS === 'ios' ? 20 : 0,
    navHeight: 45
}
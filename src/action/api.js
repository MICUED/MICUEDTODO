import constants from '../util/constants.js'

export const follow = () => {
    return {
        type: "FOLLOW"
    }
}

export const bus = () => {
    return (dispatch, state) => {
        console.log(constants.busUrl)
        fetch(constants.busUrl)
            .then(res => res.json())
            .then(ret => {
                if(ret.status === 1){
                    dispatch({
                        type: "BUS",
                        tasks: ret.info
                    })
                    console.log(ret.info)
                }
                
            })
            .catch(e => { })
    }
}

export const top = () => {
    return {
        type: "Top"
    }
}
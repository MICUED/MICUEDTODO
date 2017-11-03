import constants from '../util/constants.js'
<<<<<<< HEAD
import MyStorage from '../util/globalStorage.js'

MyStorage._getStorage()

=======
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7

const taskRet = { "status": 1, "info": { "page": { "per": 50, "current": 1, "total": 7 }, "data": [{ "page": { "per": 0, "current": 1, "total": 3 }, "data": [{ "_id": "59f676912dd818855825ca59", "updateTime": "2017-10-30T00:47:13.400Z", "name": "沈阳代码 review", "day": "2017-10-29T16:00:00.000Z", "author": "yinshuxun", "status": "1", "type": "0", "__v": 0, "spendTime": 37800000, "share": [{ "type": "jira", "share_no": "RDMIC-3818" }] }, { "_id": "59f676962dd818855825ca5a", "updateTime": "2017-10-30T00:47:18.724Z", "name": "例会", "day": "2017-10-29T16:00:00.000Z", "author": "yinshuxun", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "RDMIC-3818" }] }, { "_id": "59f676a42dd818855825ca5b", "updateTime": "2017-10-30T00:47:32.883Z", "name": "todo 首页 样式编码继续", "day": "2017-10-29T16:00:00.000Z", "author": "yinshuxun", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "RDMIC-3818" }] }] }, { "page": { "per": 0, "current": 1, "total": 3 }, "data": [{ "_id": "59f2844c2dd818855825c437", "updateTime": "2017-10-27T00:56:44.373Z", "name": "公用刷新模块代码编写", "day": "2017-10-26T16:00:00.000Z", "author": "sheny", "status": "1", "type": "0", "__v": 0, "spendTime": 7068.6, "finishTime": "2017-10-26T16:00:00.000Z", "share": [{ "type": "jira", "share_no": "SILK-4298" }] }, { "_id": "59f679572dd818855825ca6a", "updateTime": "2017-10-30T00:59:03.446Z", "name": "前端组例会", "day": "2017-10-29T16:00:00.000Z", "author": "sheny", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "RDMIC-3809" }] }, { "_id": "59f679a02dd818855825ca6b", "updateTime": "2017-10-30T01:00:16.591Z", "name": "采购申请表单基本校验和基础交互完成", "day": "2017-10-29T16:00:00.000Z", "author": "sheny", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "SILK-4298" }] }] }, { "page": { "per": 0, "current": 1, "total": 2 }, "data": [{ "_id": "59f67a8a2dd818855825ca72", "updateTime": "2017-10-30T01:04:10.289Z", "name": "视频代码调整优化", "day": "2017-10-29T16:00:00.000Z", "author": "tanglu", "status": "1", "type": "0", "__v": 0, "spendTime": 37800000, "share": [{ "type": "jira", "share_no": "MIC-37329" }] }, { "_id": "59f67a972dd818855825ca73", "updateTime": "2017-10-30T01:04:23.178Z", "name": "前端周例会", "day": "2017-10-29T16:00:00.000Z", "author": "tanglu", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "RDMIC-3807" }] }] }, { "page": { "per": 0, "current": 1, "total": 1 }, "data": [{ "_id": "59f680842dd818855825caaa", "updateTime": "2017-10-30T01:29:40.523Z", "name": "Crov聚力一战在MIC搜索列表页的引流", "day": "2017-10-29T16:00:00.000Z", "author": "jiangcheng", "status": "1", "type": "0", "__v": 0, "spendTime": 37800000, "share": [{ "type": "jira", "share_no": "MIC-37292" }] }] }, { "page": { "per": 0, "current": 1, "total": 2 }, "data": [{ "_id": "59f6791b2dd818855825ca68", "updateTime": "2017-10-30T00:58:03.997Z", "name": "展示厅升级展示页面交互用例补充", "day": "2017-10-29T16:00:00.000Z", "author": "AMMO", "status": "1", "type": "0", "__v": 0, "spendTime": 37800000, "share": [{ "type": "jira", "share_no": "MIC-37126" }] }, { "_id": "59f6793f2dd818855825ca69", "updateTime": "2017-10-30T00:58:39.681Z", "name": "mic搜索结果页面交互制作", "day": "2017-10-29T16:00:00.000Z", "author": "AMMO", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "MIC-37247" }] }] }, { "page": { "per": 0, "current": 1, "total": 3 }, "data": [{ "_id": "59e69fae0795ff6439576225", "updateTime": "2017-10-18T00:26:22.841Z", "name": "联调about", "day": "2017-10-17T16:00:00.000Z", "author": "fangxingxing", "status": "1", "type": "0", "__v": 0, "spendTime": 37800000, "share": [{ "type": "jira", "share_no": "RDMIC-3819" }] }, { "_id": "59f27e082dd818855825c420", "updateTime": "2017-10-27T00:30:00.405Z", "name": "联调聚力一战", "day": "2017-10-26T16:00:00.000Z", "author": "fangxingxing", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "RDMIC-3819" }] }, { "_id": "59f27e4d2dd818855825c421", "updateTime": "2017-10-27T00:31:09.430Z", "name": "经销商计划编码", "day": "2017-10-26T16:00:00.000Z", "author": "fangxingxing", "status": "1", "type": "0", "__v": 0, "spendTime": 0, "share": [{ "type": "jira", "share_no": "RDMIC-3819" }] }] }], "now": "2017/10/30" } }

export const follow = () => {
    return {
        type: "FOLLOW"
    }
}

export const bus = () => {
<<<<<<< HEAD
    // return {
    //     type: "BUS",
    //     tasks: taskRet.info
    // }

    return (dispatch, state) => {
        MyStorage._load('name', name => {
            fetch(constants.busUrl + `?userName=${name}`)
                .then(res => res.json())
                .then(ret => {
                    if (ret.status === 1) {
                        dispatch({
                            type: "BUS",
                            tasks: ret.info
                        })
                        console.log(ret.info)
                    }

                })
                .catch(e => { })
        })

    }
}

export const counts = () => {
    return (dispatch, state) => {
        MyStorage._load('name', name => {
            fetch(constants.statisticsUrl + `?userName=${name}`)
                .then(res => res.json())
                .then(ret => {
                    if (ret.status === 1) {
                        dispatch({
                            type: "COUNTS",
                            counts: ret.info.data
                        })
                    }

                })
                .catch(e => { })
        })

    }
=======
    return {
        type: "BUS",
        tasks: taskRet.info
    }

    // return (dispatch, state) => {
    //     console.log(constants.busUrl)
    //     fetch(constants.busUrl)
    //         .then(res => res.json())
    //         .then(ret => {
    //             if (ret.status === 1) {
    //                 dispatch({
    //                     type: "BUS",
    //                     tasks: ret.info
    //                 })
    //                 console.log(ret.info)
    //             }

    //         })
    //         .catch(e => { })
    // }
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
}

export const top = () => {
    return {
        type: "Top"
    }
}
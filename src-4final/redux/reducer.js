/*
reducer函数模块： 根据当前的state和指定的action，返回一个新的state。
*/


// 管理多个reducer
import {combineReducers} from "redux";
import {INCREMENT, DECREMENT} from "./acton-types";
/*
第1个reducer， 即count
 */


// 管理count状态数据的reducer，建议取名count。 （建议管理哪个， 就取名哪个）
// reducer(state , action)的参数是固定。 注意：此时的state不是对象， 而是数据本身。例如默认显示的为1
// action是一个对象
// action = { type: 'INCREMENT' , data: 2}
function count( state = 10, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}


/*
第2个reducer， 即user
 */
const initUser = {}

function user(state=initUser, action) {
    switch (action.type) {
        default:
            return state
    }
}


/*

combineReducers函数： 接收包含所有的reducer函数的对象， 返回一个新的reducer函数（总的reducer）
总的reducer函数管理的state结构是对象

{
    count: 10,
    user: {}
}

*/

export default combineReducers({
    count,
    user
})

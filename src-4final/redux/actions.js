/*
包含n个用来创建action的工厂函数，也叫action creator
*/

import {INCREMENT, DECREMENT} from "./acton-types"

// 第一种写法
// 增加的action
export function increment(number) {
    return {type: INCREMENT, data: number}
}


// 第二种写法： 箭头函数
// 减少的action
export const decrement = (number) => ({type: DECREMENT, data: number})



// 同步的action函数， 返回的是对象
// 异步的action函数， 返回的是新的函数, 在函数里面执行异步代码




// 异步增加的action
export const incrementAsync = (number) => {
    return dispatch => {
        // 1、异步执行，（定时器， ajax请求， promise对象）
        setTimeout(() => {
            // 2、当前异步任务执行完成时， dispatch（分发）一个同步的action
            dispatch(increment(number))
        }, 1000)
    }
}




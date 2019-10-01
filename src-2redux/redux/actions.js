/*
包含n个用来创建action的工厂函数，也叫action creator
*/

import {INCREMENT, DECREMENT} from "./acton-types";

// 第一种写法
// 增加的action
export function increment(number) {
    return {type: INCREMENT, data: number}
}


// 第二种写法： 箭头函数
// 减少的action
export const decrement = (number) => ({type: DECREMENT, data: number})
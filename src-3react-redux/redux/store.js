import {createStore} from "redux";
import count from "./reducer";


// 根据reducer, 使用createStore()函数创建store对象。
export default createStore(count)   /*  创建store对象内部会第一次调用reducer, 是为了初始化显示  */

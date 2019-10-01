import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer";



// 根据reducer, 使用createStore()函数创建store对象。
// 创建store对象内部会第一次调用reducer, 是为了初始化显示
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/app";
import reducer from './redux/reducer'
import {createStore} from "redux";


// 根据reducer创建一个store对象
const store = createStore(reducer)
ReactDOM.render(<App store={store}/>, document.getElementById('root'))

// store内部的状态发生改变时，进行回调函数
store.subscribe(() => {
        ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})
import React from 'react'
import {render} from 'react-dom'
import App from "./components/app";
import store from "./redux/store";


render(<App store={store} />, document.getElementById('root'))



// 给store对象绑定状态更新的监听
store.subscribe(() => {  /* store内部的状态数据发生改变时回调*/
    // 重新渲染App组件
    render(<App store={store} />, document.getElementById('root'))
})
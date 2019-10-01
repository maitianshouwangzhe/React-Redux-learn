/*

自定义 redux 库


 redux 的主要库

1) redux 库向外暴露下面几个函数
    createStore(): 接收的参数为 reducer 函数, 返回为 store 对象
    combineReducers(): 接收包含 n 个 reducer 方法的对象, 返回一个新的 reducer 函数
    applyMiddleware() // 暂不实现
2) store 对象的内部结构
    getState(): 返回值为内部保存的 state 数据
    dispatch(): 参数为 action 对象
    subscribe(): 参数为监听内部 state 更新的回调函数

 */



// 实现createStore的功能

// 根据指定的reducer函数，创建一个store对象并返回
export function createStore(reducer) {

    // 用来储存内部状态数据的变量, 初始值为调用reducer函数返回的结果（第一次调用返回为外部指定的默认值）
    let state = reducer( undefined, { type: '@@redux/init' })

    // 用来存储监听state更新回调函数的数组容器
    const listeners = []

    // 返回当前的内部数据
    function getState() {
        return state
    }

    // 分发action，
    // （1）触发reducer函数调用，
    // （2）保存产生新的state
    // （3） 调用所有已存在的监视回调函数
    function dispatch(action) {
        // 调用 reducer 函数得到最新的 state 值
        const newState = reducer(state, action)
        // 保存state
        state = newState
        listeners.forEach(listener => listener())
    }

    // 绑定内部state改变的监听回调函数
    // 可以给一个state绑定多个监听
    function subscribe(listener) {
        // 保存到缓存listeners的容器数组中
        listeners.push(listener)
    }


    // 返回store对象， 有三种方法
    return {
        getState,
        dispatch,
        subscribe,
    }
}








/*

// 实现combineReducers的功能
// 整个传入的多个reducer函数，返回一个新的reducer函数， 则新的reducer函数的状态结构为对象


例如： reducers函数的结构为:    [ 注: 每一个都是回调函数，    ]
    {
        count: (state = 2, action) => 3
        user: (state = {}, action) => {}
    }


   得到的总状态的结构为：(冒号后面的意思为调用count函数)
    {
        count: count(state.count, action)
        user:  user(state.user,  action)
    }


*/
export function combineReducers(reducers) {
    // 返回一个新的 总reducer 函数
    // 函数接收的是总的 state 和指定的 action
    return (state = {}, action) => {
        // 遍历调用所有的 reducer, 并得到其返回的新状态值 , 并封装成对象作为总的新 state 对象
        //  Object.keys(reducers) 得到的结果为['count', 'user'], 数组的reduce方法
        const newState = Object.keys(reducers).reduce((preState, key) => {
            // 执行reducers中的每个reducer函数，得到一个新的状态，并封装一个对象
            preState[key] = reducers[key](state[key], action)
            return preState
        }, {})
        // 返回新的状态对象
        return newState
    }
}

// 方法2
export function combineReducers2(reducers) {
    // 返回一个新的 总reducer 函数
    // 函数接收的是总的 state 和指定的 action
    return (state = {}, action) => {
        // 遍历调用所有的 reducer, 并得到其返回的新状态值 , 并封装成对象作为总的新 state 对象
        //  Object.keys(reducers) 得到的结果为['count', 'user'], 数组的reduce方法
        const totalState = {}
        Object.keys(reducers).forEach(key => {
            totalState[key] = reducers[key](state[key], action)
        })
        return totalState
    }
}



//  Object.keys(person)的用法
let person = {name:"张三", age:25, address:"深圳", getName:function(){}}

Object.keys(person).map((key) => {
    console.log(
        person[key]      /*  打印的得到的结果为： 张三， 25， 深圳， fn()   */
    )
})
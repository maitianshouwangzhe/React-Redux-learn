

// 管理count的reducer函数
export default function count(state = 1000, action) {
    switch (action.type) {
        case 'increment' :
            return state + action.number
        case 'decrement' :
            return state - action.number
        default:
            return state

    }
}
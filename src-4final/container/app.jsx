import {connect} from 'react-redux'

import Counter from "../components/counter";
import {increment, decrement, incrementAsync} from "../redux/actions";




// 容器组件： 通过使用connect()包装UI产生的组件, 包装组件就是为了传入属性
// connect()是高阶函数
// connect() 返回的函数是一个高阶组件： 接收一个UI组件， 生成一个容器组件
// 容器组件的责任： 向UI组件中传入特定的属性


// 管理的state成了对象，则对应于取出
export default connect(
    state => ({count: state.count}),
    {increment, decrement, incrementAsync}
)(Counter)
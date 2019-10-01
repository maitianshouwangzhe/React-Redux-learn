import {connect} from 'react-redux'

import Counter from "../components/counter";
import {increment, decrement} from "../redux/actions";




// 容器组件： 通过使用connect()包装UI产生的组件
// connect()是高阶函数
// connect() 返回的函数是一个高阶组件： 接收一个UI组件， 生成一个容器组件
// 容器组件的责任： 向UI组件中传入特定的属性
export default connect(
    state => ({count: state}),
    {increment, decrement}
)(Counter)
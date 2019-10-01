import {connect} from 'react-redux'

import Counter from "../components/counter";
import {increment, decrement} from "../redux/actions";



// 用来将redux管理的state数据映射成UI组件的一般属性的函数
function mapStateToprops(state) {
    return {
        count: state
    }
}


// 用来将dispatch代码的函数映射成UI组件的函数属性的函数
function mapDispatchToProps(dispatch) {
    return {
        increment: (number) => dispatch(increment(number)),
        decrement: (number) => dispatch(decrement(number))
    }
}



// 容器组件： 通过使用connect()包装UI产生的组件
// connect()是高阶函数
// connect() 返回的函数是一个高阶组件： 接收一个UI组件， 生成一个容器组件
// 容器组件的责任： 向UI组件中传入特定的属性
export default connect(
    mapStateToprops,    /* 指定一般属性  */
    mapDispatchToProps,   /*  指定函数属性      */
)(Counter)
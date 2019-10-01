import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {increment, decrement} from "../redux/actions";

export default class App extends Component{

    // 传入store对象
    static propTypes = {
        store: PropTypes.object.isRequired
    }



    // 得到select的值， 使用ref
    constructor(props){
        super(props)
        // 创建一个ref容器，将这个容器传给要找的标签
        this.numberRef = React.createRef()
    }


    // 增
    increment = () => {
        // 得到select的值，如：option中有1，2，3
        // 将字符串转为数字
        const number = this.numberRef.current.value *1
        // 更新状态。
        this.props.store.dispatch(increment(number))
    }

    // 减
    decrement = () => {
        const number = this.numberRef.current.value *1
        this.props.store.dispatch(decrement(number))
    }

    // 奇数则加
    incrementIfOdd = () => {
        const number = this.numberRef.current.value *1
        if (this.props.store.getState() % 2 === 1){
            this.props.store.dispatch(increment(number))
        }
    }

    // 异步增
    incrementAsync = () => {
        const number = this.numberRef.current.value *1
        // 定时器
        setTimeout(() => {
            this.props.store.dispatch(increment(number))
        }, 1000)
    }



    render() {
        // 读取store对象中的状态数据
        const count = this.props.store.getState()
        return (
            <div>
                <p>点击{count}次</p>
                <div>
                    <select ref={this.numberRef}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+(增)</button>&nbsp;&nbsp;
                    <button onClick={this.decrement}>-(减)</button>&nbsp;&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd(如果为奇数，则增)</button>&nbsp;&nbsp;
                    <button onClick={this.incrementAsync}>increment async（异步增）</button>
                </div>
            </div>
        )
    }
}
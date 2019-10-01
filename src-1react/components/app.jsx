import React, {Component} from 'react'

export default class App extends Component{
    state = {
        count:0
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
        // 更新状态。由于新状态是在原状态基础上相加得到的。则使用函数型的setState， 箭头函数返回一个对象， 需要用小括号。
        this.setState(state => ({count: state.count + number}))
    }

    // 减
    decrement = () => {
        const number = this.numberRef.current.value *1
        this.setState(state => ({count: state.count - number}))
    }

    // 奇数则加
    incrementIfOdd = () => {
        const number = this.numberRef.current.value *1
        if (this.state.count % 2 === 1){
            this.setState(state => ({count: state.count + number}))
        }
    }

    // 异步增
    incrementAsync = () => {
        const number = this.numberRef.current.value *1
        // 定时器
        setTimeout(() => {
            this.setState(state => ({count: state.count + number}))
        }, 1000)
    }



    render() {
        const {count} = this.state
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
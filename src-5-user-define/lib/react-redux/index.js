/*

自定义实现：
react-redux库的主要模块

*/

import React, {Component} from 'react'
import PropTypes from 'prop-types'



// 用来向所有的容器组件提供store的组件类
// 使用context向所有的容器组件提供store
export class Provider extends Component{

    static propTypes = {
        store: PropTypes.object.isRequired
    }

    // 声明提供的context的数据名称和类型
    static childContextTypes= {
        store: PropTypes.object
    }

    // 向所有 有声明的后代组件 提供包含要传递数据的context对象
    getChildContext(){
        // 返回的是对象
        return  {
            store: this.props.store
        }
    }

    render() {
        // 返回渲染<Provider>里面的所有子节点， 如App
        return this.props.children
    }
}


// connect()高阶函数， 返回的高阶组件函数
export function connect(mapStateToProps, mapDispatchToProps) {
    // 返回高级组件函数
    return (UIComponent) => {
        return class ContainerComponent extends Component{
            // 声明要接收的context数据的名称和类型
            static contextTypes = {
                store: PropTypes.object
            }

            // 测验一下
            constructor(props, context){
                super(props)
                console.log('ContainerComponent constructor（）', context.store)

                // 得到store对象
                const  {store} = context
                // 得到包含所有一般属性的对象
                const stateProps = mapStateToProps(store.getState())
                // 将所有一般属性作为容器的状态数据
                this.state={...stateProps}

                // 得到包含所有函数属性的对象
                const dispatchProps = mapDispatchToProps(store.dispatch)
                // 保存到组件上(函数保存到组件上)
                this.dispatchProps = dispatchProps

                // 绑定store的state变化的监听
                store.subscribe( () => {
                    // 得到最新的状态， 更新显示界面
                    // 返回的是一个对象， 数据发生部分变化， 最后用解构处理
                    this.setState(
                        {...mapStateToProps(store.getState())}
                        )
                })


            }

            render() {
                // 返回UI组件的标签
                return <UIComponent {...this.state} {...this.dispatchProps} />
            }

        }
    }
}

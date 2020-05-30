import React, { Component } from 'react';


// 16.0版本之前的生命周期
export default class Lifecycle extends Component {
    constructor(props) {
      super(props);
      console.log('1.组件构造函数执行');
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("getDerivedStateFromProps")
    //     // const { type } = nextProps;
    //     // // 当传入的type发生变化的时候，更新state
    //     // if (type !== prevState.type) {
    //     //     return {
    //     //         type,
    //     //     };
    //     // }
    //     return null
    // }
    componentWillMount() {
        console.log('2组件将要挂在');
    }
    componentDidMount() {
        console.log('3组件已挂载');
    }
    componentWillReceiveProps() {
        // 父组件传递属性有变化，做相应响应
        console.log('4 将要接收属性传递')
    }
    shouldComponentUpdate() {
        // 组件是否需要更新，需要返回布尔值结果，
        console.log("5 组件是否需要更新？")
        return true
    }
    componentWillUpdate() {
        // 组件将要更新 可做更新统计
        console.log("6 组件将要更新")
    } 
    componentDidUpdate() {
        console.log("7 组件已更新")
    } 
    componentWillUnmount() {
        console.log("8 组件卸载")
    } 

    render() {
        console.log("9 render")
        return (
            <div>
                dadasda
            </div>
        )
    }
}
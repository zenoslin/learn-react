import Taro, { Component } from '@tarojs/taro'
import { View, Input , Text } from '@tarojs/components'
import './index.scss'


export default class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    addItem () {
        let { list } = this.state
        const inputVal = this.inputVal
        if (inputVal == '') return
        else {
            list.push(inputVal)
        }
        this.setState({
            list,
            inputVal: ''
        })
    }

    inputHandler (e) {
        this.setState({
            inputVal:e.target.value
        })
    }

    render () {
        let { list, inputVal } = this.state

        return (
            <View className='index'>
                <Input className='input' type='text' value={inputVal} onInput={this.inputHandler.bind(this)} />
                <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
                <View claseName='list_wrap'>
                    <Text>Todo list</Text>
                    {
                        list.map((item, index) => {
                            return <View>
                                <Text>{index + 1}.{item}</Text>
                            </View>
                        })
                    }
                </View>
            </View>
        )
    }
}
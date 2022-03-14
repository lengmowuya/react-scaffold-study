// 创建APP组件
import React from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Hello,World!</h1> */}
        <Hello />
        <Welcome />
      </div>
    )
  }
}
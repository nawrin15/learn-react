import React, { Component } from 'react'
//Conditional state update
class ClassCounterOne_2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0, 
      name: ""
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  // componentDidUpdate() {
  //   console.log("updating document title")
  //   document.title = `Clicked ${this.state.count} times`
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating document title")
      document.title = `Clicked ${this.state.count} times`
    }  
  }
  
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.name}
          onChange={e => this.setState({name: e.target.value})}
        />
        <button onClick={() => this.setState({count: this.state.count + 1})}>
           Click {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterOne_2
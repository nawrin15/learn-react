import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count:0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count: this.state.count + 1 }
        })
    }
    
    decrementCount = () => {
      this.setState(prevState => {
          return {count: prevState.count - 1 }
      })
    }

  render() {
    return (
      <div>
          Count: {this.state.count}
          <button onClick={this.incrementCount}> Increment </button>
          <button onClick={this.decrementCount}> Decrement </button>
      </div>
    )
  }
}

export default ClassCounterTwo;
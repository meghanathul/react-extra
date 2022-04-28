import React, { Component } from 'react'

export class Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Welcome'
      }
    }
    
  render() {
    return (
      <div>
      <h1>{this.state.msg}</h1>
      <button onClick={()=>this.setState({msg:'goodby'})}>change</button>
      </div>
    )
  }
}

export default Class
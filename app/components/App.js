import React, { Component } from 'react'
import NavMain from './Nav'

class App extends Component {

  render(){
    return (
      <div>
        <NavMain />
        <h1>App Component</h1>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default App

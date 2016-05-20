import React, { Component } from 'react'
import { Link } from 'react-router'

class NavMain extends Component {

  render(){
    return (
      <div>
        <Link to='/'>Dashboard</Link>
        <Link to='/about'>About</Link>
        <Link to='/settings'>Settings</Link>
      </div>
    )
  }
}

export default NavMain

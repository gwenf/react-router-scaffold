import React, { Component } from 'react'
import { Link } from 'react-router'
// var FontAwesome = require('react-fontawesome');
window.$ = window.jQuery = require('jquery');
import FontAwesome from 'react-fontawesome'
import Octicon from 'react-octicon'

// require('https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css')
// require('font-awesome/css/font-awesome.css');

require('../../dist/main.css')

class NavMain extends Component {

  iconArrow(){
    $('.fa-arrow-left').addClass('active-icon');
    $('.fa-arrow-left').removeClass('inactive-icon');
    $('.fa-bars').addClass('inactive-icon');
    $('#menu_active:checked + #wrapper #menu').css('left','0');
    $('#menu_active:checked + #wrapper').css('padding-left','210px');
  }
  iconBars(){
    $('.fa-arrow-left').addClass('inactive-icon');
    $('.fa-bars').removeClass('inactive-icon');
    $('.fa-bars').addClass('active-icon');
    $('#menu_active:checked + #wrapper #menu').css('left','-160px');
    $('#menu_active:checked + #wrapper').css('padding-left','54px');
  }

  render(){
    return (
      <div>
        <input type='checkbox' id='menu_active' checked/>
        <div id='wrapper' className='active'>
          <div id='menu'>
            <span id='site-name'><label for='menu_active'>Site Name <i className="fa fa-arrow-left" onClick={this.iconBars}></i><i className="fa fa-bars" onClick={this.iconArrow}></i></label></span>
            <ul>
              <Link to='/'>
                <li>Dashboard<i className="fa fa-home"></i></li>
              </Link>
              <Link to='/about'>
                <li>About<i className="fa fa-briefcase"></i></li>
              </Link>
              <Link to='/settings'>
                <li>Settings<i className="fa fa-user"></i></li>
              </Link>
            </ul>
          </div>
          <div id='page-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default NavMain

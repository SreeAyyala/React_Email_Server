import React from 'react'
import { Route, Link } from 'react-router-dom'

import Dpdown from './../Dropdown'


export default class Header extends React.Component {

  render() {

    return (
      <header>
        <div class='fl_left div_hd_icon'>
          <Link to='/'>
            <img src='Thabpet In.png' class='thabpet' />
          </Link>
        </div>
        <div class='fl_right header_icon'>
          <Route path='/mail' component={Dpdown} />
        </div>
      </header>
    );
  }
}

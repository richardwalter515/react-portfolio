import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

function Load() {
    const [redirectNow, setRedirectNow] = useState(false)
    setTimeout(function(){ setRedirectNow(true) },5000);
    if (redirectNow) {
      return <Redirect to='/Home' />
    }
    return (
      <div>
          <div id="loadPageDiv">
            <h1 id="loadPageH1">Richard Walter</h1>
            <h5 id="loadPageH5">Technical Account Manager</h5>
          </div>
    </div>
    );


  }


export default Load;
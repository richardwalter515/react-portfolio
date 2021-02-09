import React from "react";


function Load() {
    setTimeout(function(){ window.location = "/Home"; },5000);
    return (
      <div>
          <div id="loadPageDiv">
            <h1 id="loadPageH1">Richard Walter</h1>
            <h5 id="loadPageH5">Full Stack Developer</h5>
          </div>
    </div>
    );
  }


export default Load;
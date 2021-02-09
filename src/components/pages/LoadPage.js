import React from "react";

function Load() {
    return (
      <div>
          <div id="loadPageDiv">
            <h1 id="loadPageH1">Richard Walter</h1>
            <h5 id="loadPageH5">Full Stack Developer</h5>
          </div>
    </div>
    );
  }

setTimeout(function(){ window.location = "/Home"; },5000);

export default Load;
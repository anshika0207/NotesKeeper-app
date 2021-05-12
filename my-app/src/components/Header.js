import React from "react";

function Header(){
  var today = new Date();
  var date = today.toLocaleDateString("en-US");
    return(
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Notes</h1>
        <h3 class="lead">{date}</h3>
      </div>
    </div>
    ); 
}

export default Header;
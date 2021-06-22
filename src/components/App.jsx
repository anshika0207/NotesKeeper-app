import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import tasks from "../tasks";

function createNew(entry){
  return (
    <Body
    title= {entry.title}
    content= {entry.content} s
     />
  );
}


function App(){
    return(
      <div>
          <Header />
          {tasks.map(createNew)}
          <Footer />
        </div>
    );
}

export default App;
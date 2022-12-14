import React from "react"
import Header from "./Header"
import bodyData from "./BodyData"
import Body from "./Body"
function App() {
  const body = bodyData.map(items => {
    return ( <Body 
      key = {items.id}
      {...items}
      />)
  })
  return (
    <>
      <Header />
      {body}
    </>
  );
}

export default App;

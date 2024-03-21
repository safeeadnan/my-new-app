import React, { useState } from "react";



function Dashboard() {
    const [a,seta]=useState(0);
    const clickk = ()=>{seta(a+1)}
  return (
    <div>
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application. hein sachme</p>
      <>idhar counter rakhte {a}</>
      <button onClick={clickk}>abc</button>
    </div>
  );
}

export default Dashboard;
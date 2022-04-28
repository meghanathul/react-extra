import React, { useState } from 'react'
import Class from './DAY2/Class';
import Funtion from './DAY2/Funtion';

const App = () => {

  const [funcState, setFuncState] = useState(true);

  return (
    <div>
      <div style={{ display: "inline" }}>
        <button onClick={() => { setFuncState(!funcState) }}>Function</button>
        <button onClick={() => { setFuncState(!funcState) }}>Class</button>
      </div> <br /> <br />
      <div>
        {funcState ? <Funtion /> : null}
        {funcState ? <Class /> : null}
      </div>
    </div>
  )
}

export default App
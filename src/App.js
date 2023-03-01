import React, {useState} from 'react';

const App = () => {
let newTime = new Date().toLocaleTimeString();

const [Ctime, setCtime] = useState(newTime);

const UpdateTime = () => {
   let newTime = new Date().toLocaleTimeString();
   setCtime(newTime);
}

  return(
    <>
      <h1> {Ctime} </h1>
      <button onClick={UpdateTime}>Get Time</button>
    </>
  );
}
export default App;

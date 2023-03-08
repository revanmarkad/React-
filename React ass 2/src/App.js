
import React from 'react';
 import Challenge1 from './Challenge1';
import Compo1 from './Compo1';
import Compo2 from './Compo2';
import Compo3 from './Compo3';
function App() {
  return (
    <>
   <Challenge1 heading="Register here ..." buttom="submit"/>
   <Compo1 heading="Register here ..."/>
   <Compo2/>
   <br />
   <br />
   <Compo3 button="submit"/>
    </>
  );
}

export default App;

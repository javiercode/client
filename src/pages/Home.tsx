import * as React from 'react';
import {getState} from '../store/login'

function Home() {
  console.log(getState())
  return (
    <>Home</>
  );
}

export default Home;

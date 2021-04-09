import React from 'react';
import { ContextProvider } from './Components/HOCs/Context/Context'
import Layout from './Components/Layout/Layout'
import "nes.css/css/nes.min.css"
const App = () => {

    return (
      <div className="App">
        <ContextProvider>
          <Layout />
        </ContextProvider>            
      </div>
    );
}

export default App;

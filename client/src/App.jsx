import React from 'react';

import './App.css';
import { ApiGlobalProvider } from './context/ApiGlobalState';
import { Home } from './components/Home';

const App = () => {
  return (
   <ApiGlobalProvider>
    <div className="App">
      <Home/>
    </div>
   </ApiGlobalProvider>
  ); 
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Product from './container/cart/cart';
import Login from './container/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Product}/>
        </BrowserRouter>
    </div>
  );
}

export default App;

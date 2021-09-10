import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './account/login';
import Register from './account/register';
import Dashboard from './dashboard';

function App() {
  if(localStorage.getItem("userid")==null){
    var page = <>
            <Route exact path="/login" component={Login}/>  
            <Route exact path="/register" component={Register}/>
           </>
    }else{
      var page = <>
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/dashboard" component={Dashboard}/>
                </>
    }

  return (
    <HashRouter>
      {page}
    </HashRouter>
  );
}

export default App;

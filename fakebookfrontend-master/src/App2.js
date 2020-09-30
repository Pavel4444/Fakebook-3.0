import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ChatApp from './Apps/ChatApp/Chatapp';
import CovidApp from './Apps/CovidApp/CovidApp';


class App2 extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
         
            <Switch> 
            <App />       
            <Route path="/ChatApp" component={ChatApp} exact/>  
            <Route path="/CovidApp" component={CovidApp} exact/>        
           </Switch>
           
        </div> 
      </BrowserRouter>
    );
  }
}
export default App2;
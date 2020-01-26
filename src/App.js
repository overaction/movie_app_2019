import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"
import "./App.css"
//export default 해준것은 import React처럼 괄호 없이 사용할 수 있지만
//default를 붙이지 않은것은 {} 사용을 해야한다 //
function App() {
  return <HashRouter>
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home}></Route> 
    <Route path="/Abouts" component={About}></Route>
    <Route path="/movie/:id" component={Detail}></Route>
  </HashRouter>
}

export default App;
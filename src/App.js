import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About"
import Home from "./routes/Home"
//export default 해준것은 import React처럼 괄호 없이 사용할 수 있지만
//default를 붙이지 않은것은 {} 사용을 해야한다
function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={Home}></Route> 
    <Route path="/Abouts" component={About}></Route>
  </HashRouter>
}

export default App;
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <h1>Welcome to  React Demo!!</h1>
//             <img src={logo} className="App-logo" alt="logo" />
//           </div>
//           <div>
//             <a className="App-link">
//               Click the left side menu to navigate.
//             </a>
//           </div>
          
          
//         </header>
//       </div>
//     );
//   }
// }







// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import User from './User'
import Login from './Login'
import NotFound from './404'
import Mainbox from "./layout"

import Chart from "./c01/chartApp"
import LifeCycle from "./lifeCycle"
import ExampleLifeCycle from "./exampleLifeCycle"
import LocaleSample from "./locale-sample"


class App extends Component {
    render() {
        return (
          <Router>
            <Mainbox>

                  {/*采用 <Switch>，只有一个路由会被渲染，并且总是渲染第一个匹配到的组件 */}
                  <Switch>
                      {/* exact 关键词，表示只对当前的路由进行匹配。 */}
                      <Route path={"/"} exact component={Chart} />
                      <Route path={"/chart"} exact component={Chart} />
                      <Route path={"/user"} component={User} />
                      <Route path={"/login"} component={Login} />
                      <Route path={"/lifecycle"} component={LifeCycle} />
                      <Route path={"/exampleLifeCycle"} component={ExampleLifeCycle} />
                      <Route path={"/localeSample"} component={LocaleSample} />
                      <Route path={"/nofound"} component={NotFound} />
                      <Redirect to={"/nofound"} />
                  </Switch>
            </Mainbox>
          </Router>
                 
        )
    }
}

export default App


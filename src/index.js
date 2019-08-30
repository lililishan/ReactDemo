import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



import * as serviceWorker from './serviceWorker';

import {Switch, Route, Router, HashHistory, Link} from "react-router-dom"
import { from } from 'rxjs';


const style = {
  fontFamily: 'sans-serif',
  paddingLeft: '250px'
}


// class Demo extends React.PureComponent {
//   render() {
//     <BrowserRouter>
//         <Switch>
//           <Route path="/auth" component={UnAuthorizedRoute} />
//           <AuthorizedRoute path="/home" component={App} />
//           <Redirect to="/auth" />
//         </Switch>
//     </BrowserRouter>
//     // const currentPage = document.location.hash.replace(/#\/?/, "");
//     // let CurrentPage = routeList[currentPage] || App;
//     // return (<div style={style}>
//     //         <ul className='menu-list'>
//     //           {/* {Object.keys(routeList).map((v, i) => {
//     //             return <li 
//     //               key={i}
//     //               className={v === CurrentPage ? "active": ""}
//     //               style={{ listStyle: "none" }}
//     //               >
//     //               <span>
//     //                 {v}
//     //               </span>
//     //             </li>
//     //           })} */}
//     //           {/* <li><Link to="chart" >ChartApp</Link></li>  
//     //           <li><Link  to="chart" >ChartApp1</Link></li>  
//     //           <li><Link  to="chart" >ChartApp2</Link></li>   */}
//     //         </ul>
//     //         <div style={{ padding: "30px 0"}}>
//     //           <CurrentPage />
//     //         </div>

//     //   </div>
//       )
//   }

// }

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

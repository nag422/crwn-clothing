import React from 'react';
import './pages/Homepage/homepage.styles.scss';
import Directory from './components/directory/directory.component';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
//import Homepage from './pages/Homepage/homepage.component';

import './App.css';

const HatsPage = (props) => (
  <div>
    <h1>Its Hats Page{props.match.params.id}</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <Router>
     <ul>
          <li>
            <Link to="/about">Home</Link>
          </li>
          <li>
            <Link to="/about/13">About</Link>
          </li>

    </ul>
     
     
     
        <Route path="/about" component={Directory} />
        <Route exact path="/about/:id" component={HatsPage} />
        
     </Router>
    </div>
  );
}

export default App;

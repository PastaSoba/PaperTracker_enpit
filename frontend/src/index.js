import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import queryString from 'query-string';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route render={(props) => 
        <App 
          qs={queryString.parse(props.location.search)}
        />
      }/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

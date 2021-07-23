import ReactDOM from 'react-dom';
import './index.css';
import App from './page/homepage';
import { Route, Router, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createHashHistory } from 'history';
import Introduce from 'page/introduce'
ReactDOM.render(
  <Router 
  history={createHashHistory()}
  >
            <Switch>
              <Route exact path="/HomePage" component={App} />
              <Route exact path="/" component={Introduce} />
            </Switch>
          </Router>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

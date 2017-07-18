import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './Components/App';
import IndividualProduct from './Views/IndividualProduct'
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(
  <div>
      <Router>
        <Switch>
          <Route exact path='/products' component={App} />
          <Route path='/products/:productID' render={(props => (<IndividualProduct {...props} />))} />
        </Switch>
      </Router>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();


// <Route path='/phones/:phoneId/newplan' render={(props => (<NewPlans {...props} />))} />
// <Route path='/phones/:phoneId/:planId/:gbTopUp/number' render={(props => (<NumberSelection {...props} />))} />

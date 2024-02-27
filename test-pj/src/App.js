import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages'
import Customer from './pages/customer'
import Company from './pages/company'
import AppRoute from './routes'
import index from './assets/index.css'

function App() {
  return (
    <div style={index}>
      <Router>
        <Switch>
          <AppRoute exact path='/' component={Home} />
          <AppRoute path='/customer' component={Customer} />
          <AppRoute path='/company' component={Company} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

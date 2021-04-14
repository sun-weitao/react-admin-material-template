import Home from './views/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { routers } from './router'

function App() {
  return (
    <Router>
      <Switch>
        {
          routers.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  return (<route.component />)
                }}
              />
            )
          })
        }
      </Switch>
    </Router>
  );
}

export default App;

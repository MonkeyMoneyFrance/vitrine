import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,Link,
  Switch
} from 'react-router-dom'
import routes from './config/routes'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import logo from './images/logo.png'
import MenuContainer from './components/menucontainer'
import './App.css';
import 'semantic-ui-css/semantic.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
      return (
        <Router>
          <div>
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
          </div>
        </Router>
      )



  }
}

export default App;

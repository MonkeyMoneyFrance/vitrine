import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,Link,
  Switch
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
  Visibility,Sidebar,Dimmer,Loader
} from 'semantic-ui-react'
import logo from './images/logo.png'
import firebase from './config/initfirebase'
import SidebarMenu from './components/sidebar'
import TopMenu from './components/topmenu'
// import TopMenuMobile from './components/topmenumobile'
import './App.css';
import 'semantic-ui-css/semantic.min.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount(){
    var self = this
    firebase.database().ref().on('value', function (snapshot) {
      var website = snapshot.val()
        self.setState({website})
    })
  }
  render() {
    if (!this.state.website) return (<Dimmer><Loader /></Dimmer>)
    var self = this
      return (
        <Router>
          <div id='app' className="App" style={{height:'100%',width:'100%'}} >


              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    strict={route.strict}
                    exact={route.exact}
                    render={props =>

                      <route.main ref='main' {...self.state}/>


                  }
                  />
                ))}
              </Switch>

          </div>
        </Router>
      )



  }
}

export default App;

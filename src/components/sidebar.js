import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,Link,
  Switch
} from 'react-router-dom'
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
  Dropdown,
  Transition,
  Sidebar,
  Responsive
} from 'semantic-ui-react'
import logo from '../images/logotypobleu.png'
import genericFb from '../functions/genericFb'

export default  class SidebarMenu extends Component {
  constructor(props){
    super(props)
    this.state = {visible:false}
  }
  render(){



    return(

      <Sidebar
        direction='right'
        as={Menu}
        animation='push'
        width='thin'
        fixed = 'right'
        visible={this.state.visible}
        icon='labeled' vertical  inverted >
        <Responsive   minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyTablet.maxWidth} >


                <Menu.Item as='a' icon='delete' onClick={() => {
                  this.setState({visible:false})
                  this.props.closeSideBar()
                }}  />




        <Menu.Item className='accordion-header'>
                  <Menu.Menu >
                    <Link to={'/'}>
                      <Menu.Item as='a' className='menuDropdown'>{genericFb.replaceString('%presentation')}</Menu.Item>
                    </Link>
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item className='accordion-header'>
                  <Menu.Menu >
                    <Link to={'fonctionnalites'}>
                      <Menu.Item as='a' className='menuDropdown'>{genericFb.replaceString('%features')}</Menu.Item>
                    </Link>
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item className='accordion-header'>
                  <Menu.Menu >
                    <Link to={'offres' }>
                      <Menu.Item as='a' className='menuDropdown'>{genericFb.replaceString('%offers')}</Menu.Item>
                    </Link>
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item className='accordion-header'>
                  <Menu.Menu >
                    <Link to={'monnaielocale' }>
                      <Menu.Item as='a' className='menuDropdown'>{genericFb.replaceString('%localCurrencies')}</Menu.Item>
                    </Link>
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item className='accordion-header'>
                  <Menu.Menu >
                    <Link to={'monkeymoney'}>
                      <Menu.Item as='a' className='menuDropdown'>Monkey Money</Menu.Item>
                    </Link>
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item className='accordion-header'>
                  <Menu.Menu >
                    <Link to={'contactez-nous'}>
                      <Menu.Item as='a' className='menuDropdown'>{genericFb.replaceString('%contactUs')}</Menu.Item>
                    </Link>
                  </Menu.Menu>
                </Menu.Item>


              </Responsive>
  </Sidebar>



    )
  }

}

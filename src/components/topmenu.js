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
  Transition
} from 'semantic-ui-react'
import logo from '../images/logotypobleu.png'

export default  class TopMenu extends Component {
  render(){



    return(
    <Transition visible={!this.props.visible} animation='fade' duration={100}>
      <Grid container style={{width:'100%',padding:'0.5em 0em'}}>
        <Grid.Column only='computer' computer={16} >
          <Menu  fixed='top'  size='large' borderless style={{height:'55px', backgroundColor:'white',color:'#696868' }} >
          <Menu.Menu style={{ height:'100%', padding:'1.4em 2em 0.8em 2em' }}>
              <Image href='/' src={logo}  centered style={{width:'170px'}} />
          </Menu.Menu>
          <Menu.Menu position='right' verticalAlign='middle' className='menuText' style={{color:'#696868'}} >
            <Link to='/'>
              <Menu.Item active={'/'==this.props.path}>L'essentiel</Menu.Item>
            </Link>
            <Link to='/fonctionnalites'>
              <Menu.Item active={'/fonctionnalites'==this.props.path} >Fonctionnalites</Menu.Item>
            </Link>
            <Link to='/offres'>
              <Menu.Item active={'/offres'==this.props.path} >Offres</Menu.Item>
            </Link>
            <Link to='/monnaielocale'>
              <Menu.Item active={'/monnaielocale'==this.props.path} >Monnaie Locale</Menu.Item>
            </Link>
            <Link to='/monkeymoney'>
              <Menu.Item active={'/monkeymoney'==this.props.path} >Monkey Money</Menu.Item>
            </Link>
          </Menu.Menu>
          </Menu>
        </Grid.Column>
        <Grid.Column only='mobile tablet' mobile={16} tablet={16} style={{width:'100%',padding:'0em 1em'}}>
          <Menu fixed='top'  size='large' >
          <Menu.Menu   style={{height:'100%',padding:'0.5em 1em'}}>
          <Link to='/'>
              <Image src={logo}  centered style={{height:'40px'}}  />
          </Link>
        </Menu.Menu>
        <Menu.Menu  position='right' >
        <Dropdown item icon='sidebar' size='medium'>
            <Dropdown.Menu inverted style={{backgroundColor:'rgba(0,0,0,.87)',color:'white'}}>
              <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='/'>L'essentiel</Link></Dropdown.Item>
              <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='fonctionnalites'>Fonctionnalites</Link></Dropdown.Item>
              <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='offres'>Offres</Link></Dropdown.Item>
              <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='monnaielocale'>Monnaie Locale</Link></Dropdown.Item>
              <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='monkeymoney'>Monkey Money</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        </Menu>
        </Grid.Column>
    </Grid>
  </Transition>

    )
  }

}

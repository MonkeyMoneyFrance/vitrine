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
  Dropdown
} from 'semantic-ui-react'
import logo from '../images/logoseul.png'

export default  class TopMenu extends Component {
  render(){
    if (!this.props.visible) return null;
    return(
      <Grid container style={{width:'100%',padding:'0.5em 1em'}}>
        <Grid.Column only='computer' computer={16} >
          <Menu  fixed='top'  size='large' >
          <Menu.Menu   style={{height:'100%',padding:'0.5em 2em'}}>
          <Link to='/'>
            <Image src={logo}  centered style={{height:'40px'}}  />
          </Link>
          </Menu.Menu>
          <Menu.Menu  position='right' >
            <Link to='fonctionnalites'><Menu.Item as='a' style={{height:'100%'}} >Fonctionnalites</Menu.Item></Link>
            <Link to='offres'><Menu.Item as='a'style={{height:'100%'}}>Offres</Menu.Item></Link>
            <Link to='monnaielocale'><Menu.Item as='a' style={{height:'100%'}}>Monnaie Locale</Menu.Item></Link>
            <Link to='monkeymoney'><Menu.Item as='a' style={{height:'100%'}} >Monkey Money</Menu.Item></Link>
          </Menu.Menu>
          </Menu>
        </Grid.Column>
        <Grid.Column only='mobile tablet' mobile={16} tablet={16} style={{width:'100%',padding:'0.5em 0.5em'}}>
          <Menu fixed='top'  size='large' >
          <Menu.Menu   style={{height:'100%',padding:'0.5em 1em'}}>
          <Link to='/'>
              <Image src={logo}  centered style={{height:'40px'}}  />
          </Link>
        </Menu.Menu>
        <Menu.Menu  position='right' >
        <Dropdown item icon='sidebar' size='medium'>
            <Dropdown.Menu inverted style={{backgroundColor:'rgba(0,0,0,.87)',color:'white'}}>
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

    )
  }

}

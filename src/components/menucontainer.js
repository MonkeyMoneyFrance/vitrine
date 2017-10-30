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
  Dropdown,
  Visibility,
} from 'semantic-ui-react'
import logo from '../images/logoseul.png'

export default  class MenuContainer extends Component {
  render(){
    return(

        <Grid  style={{width:'100%',padding:'0em 0em',margin:'0'}}>
          <Grid.Column only='computer' computer={16} style={{padding:'0em 2em'}}>
            <Menu   borderless inverted  size='large' style={{backgroundColor:'transparent',color:'white',borderColor:'transparent'}}>
            <Menu.Menu  borderless style={{backgroundColor:'transparent',color:'white',borderColor:'transparent'}}>
            <Link to='/'>
              <Menu.Item style={{height:'100%',padding:0}}>
                <Image src={logo}  centered style={{height:'60px'}}  />
                <Header as="menu-item" style={{padding:'0em 0.5em',fontSize: '1.2em'}}>MONKEY MONEY</Header>
              </Menu.Item>
            </Link>
          </Menu.Menu>
          <Menu.Menu borderless position='right' >
            <Link to='fonctionnalites'><Menu.Item as='a' style={{height:'100%'}} >Fonctionnalites</Menu.Item></Link>
            <Link to='offres'><Menu.Item as='a'style={{height:'100%'}}>Offres</Menu.Item></Link>
            <Link to='monnaielocale'><Menu.Item as='a' style={{height:'100%'}}>Monnaie Locale</Menu.Item></Link>
            <Link to='monkeymoney'><Menu.Item as='a' style={{height:'100%'}} >Monkey Money</Menu.Item></Link>
          </Menu.Menu>
          </Menu>
          </Grid.Column>

          <Grid.Column only='mobile tablet' mobile={16} tablet={16} style={{padding:'0em 1em'}}>
            <Menu borderless inverted  size='large' style={{backgroundColor:'transparent',color:'white',borderColor:'transparent'}}>
            <Menu.Menu  borderless style={{backgroundColor:'transparent',color:'white',borderColor:'transparent'}}>
            <Link to='/'>
              <Menu.Item style={{height:'100%',padding:0}}>
                <Image src={logo}  centered style={{height:'40px'}}  />
                <Header as="menu-item" style={{padding:'0em 0.5em',fontSize: '1em'}}>MONKEY MONEY</Header>
              </Menu.Item>
            </Link>
          </Menu.Menu>
          <Menu.Menu borderless position='right' >
          <Dropdown item icon='sidebar' size='medium' style={{width:'40px'}}>
              <Dropdown.Menu fluid style={{backgroundColor:'rgba(0,0,0,.87)'}}>
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

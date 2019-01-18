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
  Transition,
  Sidebar,
  Responsive
} from 'semantic-ui-react'
import logo from '../images/logoblanc.png'
import genericFb from '../functions/genericFb'

export default  class MenuContainer extends Component {
  render(){
    if (!this.props.visible) return null
    return(


        <Grid container style={{width:'100%',padding:'0.5em 0em',zIndex:10}}>
          <Grid.Column only='computer' computer={16}>
            <Menu   fixed='top' borderless inverted  size='large' style={{backgroundColor:'#58caf1',color:'white',borderColor:'transparent'}}>
            <Menu.Menu  borderless style={{height:'100%', padding:'0.5em 2em', backgroundColor:'transparent',color:'white',borderColor:'transparent'}}>
            <Link to='/'>
              {/* <Menu.Item style={{height:'100%',padding:0}}> */}
                <Image src={logo}  centered style={{height:'50px'}}  />
                {/* <Header as="menu-item" style={{padding:'0em 0.5em',fontSize: '1.2em'}}>MONKEY MONEY</Header> */}
              {/* </Menu.Item> */}
            </Link>
          </Menu.Menu>
          <Menu.Menu borderless position='right' className='menuTextBlanc' style={{marginRight:'1em'}} >
            <Link to='/'><Menu.Item as='a' >{genericFb.replaceString('%presentation')}</Menu.Item></Link>
            <Link to='fonctionnalites'><Menu.Item as='a' >{genericFb.replaceString('%features')}</Menu.Item></Link>
            <Link to='offres'><Menu.Item as='a' >Offres</Menu.Item></Link>
            <Link to='monnaielocale'><Menu.Item as='a' >{genericFb.replaceString('%localCurrencies')}</Menu.Item></Link>
            <Link to='monkeymoney'><Menu.Item as='a'>Monkey Money</Menu.Item></Link>
            <Link to='contactez-nous'><Menu.Item as='a'>{genericFb.replaceString('%contactUs')}</Menu.Item></Link>

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
            <Menu.Item  icon='sidebar' size='medium' style={{width:'40px'}}/>




          <Dropdown item icon='sidebar' size='medium' style={{width:'40px'}}>
              <Dropdown.Menu fluid style={{backgroundColor:'rgba(0,0,0,.87)'}}>
                <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='/'>{genericFb.replaceString('%presentation')}</Link></Dropdown.Item>
                <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='fonctionnalites'>{genericFb.replaceString('%features')}</Link></Dropdown.Item>
                <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='offres'>{genericFb.replaceString('%offers')}</Link></Dropdown.Item>
                <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='monnaielocale'>{genericFb.replaceString('%localCurrencies')}</Link></Dropdown.Item>
                <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='monkeymoney'>Monkey Money</Link></Dropdown.Item>
                <Dropdown.Item as='a' style={{color:'rgba(0,0,0,.87)'}}><Link to='contactez-nous'>{genericFb.replaceString('%contactUs')}</Link></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

          </Menu.Menu>
          </Menu>
          </Grid.Column>
      </Grid>


    )
  }

}

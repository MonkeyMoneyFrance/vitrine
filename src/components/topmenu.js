import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import {Flag,Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Dropdown,Transition,Sidebar,Responsive} from 'semantic-ui-react'
import logo from '../images/logotypobleu.png'
import genericFb from '../functions/genericFb'

export default  class TopMenu extends Component {

  constructor(props){
    super(props)
    this.shouldDisplay = false
    this.language = genericFb.getLanguage()
    this.state = {dropDownLanguageOpen:false}
  }
  render(){



    return(

      <Grid container >
        <Grid.Column only='computer' computer={16} >
          <Menu fixed='top'  size='large' borderless style={{height:'55px', backgroundColor:'white',color:'#696868',width:'100%',padding:'0.5em 0em'}} >
          <Menu.Menu style={{ height:'100%', padding:'1.4em 2em 0.8em 2em' }}>
            <Link to='/' >
              <Image src={logo}  size='small' centered />
              </Link>
          </Menu.Menu>
          <Menu.Menu position='right' verticalAlign='middle' className='menuText' style={{color:'#696868'}} >
            <Link to='/'>
              <Menu.Item active={'/'==this.props.path}>L'essentiel</Menu.Item>
            </Link>
            <Link to='fonctionnalites'>
              <Menu.Item active={'/fonctionnalites'==this.props.path} >Fonctionnalites</Menu.Item>
            </Link>
            <Link to='offres'>
              <Menu.Item active={'/offres'==this.props.path} >Offres</Menu.Item>
            </Link>
            <Link to='monnaielocale'>
              <Menu.Item active={'/monnaielocale'==this.props.path} >Monnaie Locale</Menu.Item>
            </Link>
            <Link to='monkeymoney'>
              <Menu.Item active={'/monkeymoney'==this.props.path} >Monkey Money</Menu.Item>
            </Link>

            {/****************************************************/}
            <Menu.Item link icon='globe'>
                  <Dropdown icon={<Flag name='fr'/>}>
                    <Dropdown.Menu>
                      <Dropdown.Item flag='fr' onClick={()=>{

                        }}/>
                      <Dropdown.Item flag='gb' onClick={()=>{

                        }}/>
                    </Dropdown.Menu>
                  </Dropdown>
            </Menu.Item>

          </Menu.Menu>
          </Menu>
        </Grid.Column>
        <Grid.Column only='mobile tablet' mobile={16} tablet={16} style={{width:'100%',padding:'0em 1em'}}>
          <Menu fixed='top'  size='large'  >
          <Menu.Menu   style={{height:'100%',padding:'1em 1em'}}>
          <Link to='/'>
              <Image src={logo}  size='small' centered style={{maxWidth:'150px'}}  />
          </Link>
        </Menu.Menu>
        <Menu.Menu  position='right' ><Menu.Item icon='sidebar' onClick={() => {
              this.props.openSideBar(!this.shouldDisplay)
              this.shouldDisplay = !this.shouldDisplay
        }} /></Menu.Menu>
      </Menu>
    </Grid.Column>
    </Grid>



    )
  }

}

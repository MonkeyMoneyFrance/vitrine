import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import {Flag,Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Dropdown,Transition,Sidebar,Responsive} from 'semantic-ui-react'
import logo from '../images/logotypobleu.png'
import genericFb from '../functions/genericFb'

export default  class TopMenu extends Component {

  constructor(props){
    super(props)
    this.shouldDisplay = false
    this.state = {}
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
              <Menu.Item active={'/'==this.props.path}>{genericFb.replaceString('%presentation')}</Menu.Item>
            </Link>
            <Link to='fonctionnalites'>
              <Menu.Item active={'/fonctionnalites'==this.props.path} >{genericFb.replaceString('%features')}</Menu.Item>
            </Link>
            <Link to='offres'>
              <Menu.Item active={'/offres'==this.props.path} >{genericFb.replaceString('%offers')}</Menu.Item>
            </Link>
            <Link to='monnaielocale'>
              <Menu.Item active={'/monnaielocale'==this.props.path} >{genericFb.replaceString('%localCurrencies')}</Menu.Item>
            </Link>
            <Link to='monkeymoney'>
              <Menu.Item active={'/monkeymoney'==this.props.path} >Monkey Money</Menu.Item>
            </Link>
            <Link to='contactez-nous'>
              <Menu.Item active={'/monkeymoney'==this.props.path} >{genericFb.replaceString('%contactUs')}</Menu.Item>
            </Link>

            {/***********************         Language Dropdown         *****************************/}
            <Menu.Item style={{alignItems:'flex-start'}}>
              <Dropdown icon={(localStorage.getItem("language")=='FR') ? <Flag name='fr'/> : <Flag name='gb'/>}>
                <Dropdown.Menu>
                  <Dropdown.Item flag='fr' onClick={()=>{
                    localStorage.setItem("language",'FR')
                    window.location.reload()
                    }}/>
                  <Dropdown.Item flag='gb' onClick={()=>{
                    localStorage.setItem("language",'EN')
                    window.location.reload()
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
        <Menu.Menu  position='right' >
          {/********************        Language Dropdown                  *************/}
          <Menu.Item >
            <Dropdown style={{
                height:'auto',
              }} icon={(localStorage.getItem("language")=='FR') ? <Flag name='fr'/> : <Flag name='gb'/>}>
              <Dropdown.Menu>
                <Dropdown.Item flag='fr' onClick={()=>{
                  localStorage.setItem("language",'FR')
                  window.location.reload()
                  }}/>
                <Dropdown.Item flag='gb' onClick={()=>{
                  localStorage.setItem("language",'EN')
                  window.location.reload()
                  }}/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item icon='sidebar' onClick={() => {
              this.props.openSideBar(!this.shouldDisplay)
              this.shouldDisplay = !this.shouldDisplay
        }} />
      </Menu.Menu>
      </Menu>
    </Grid.Column>
    </Grid>



    )
  }

}

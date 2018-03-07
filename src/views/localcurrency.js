import React, {Component} from 'react';
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
    Transition,
    Sidebar
} from 'semantic-ui-react'
import MenuContainer from '../components/menucontainer'
import TopMenu from '../components/topmenu'
import SidebarMenu from '../components/sidebar';
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import ChatBot from './chatbot'
import Fond from '../images/home/fond.png'
import firebase from '../config/initfirebase'
import banqueImage from '../images/home/index'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }


    render() {

      var localcurrency = this.props.website.localcurrency
        return (
          <div>
            <SidebarMenu ref='sidebarmenu'  closeSideBar={()=>this.refs.topmenu.shouldDisplay = false}/>
            <TopMenu     ref='topmenu' path={this.props.path} openSideBar={(bool)=>this.refs.sidebarmenu.setState({visible:bool})}/>
            <Sidebar.Pushable  >

          <Sidebar.Pusher>
              <Segment
                  inverted
                  textAlign='center'
                  style={{
                      minHeight: 600,
                      padding: '1em 0em',
                      background: `url(${Fond}) no-repeat`,
                      backgroundSize: 'cover'
                  }}
                  verticalAlign='middle'
                  vertical
              >
                <Container>
                  <Grid centered style={{marginTop: '5em'}}>
                    <Grid.Column only='computer' width={11} verticalAlign='middle' centered textAlign='center' style={{marginTop: '1em', marginBottom: '2em'}}>
                      <Header
                        as='h2'
                        content={localcurrency.title}
                        style={{
                            fontSize: '3.5em',
                            textAlign: 'center',
                            fontWeight: '200',
                            marginTop: '1em',
                            color: 'white',
                            lineHeight: '1.3em',
                            letterSpacing: '-0.03em'
                        }}
                      />

                      <Header  as='h2' style={{fontSize: '1.3em', marginTop: '1em', textAlign: 'center', fontWeight: 'normal',
                       color: 'white', fontWeight:'normal'}}>
                       <div dangerouslySetInnerHTML={{__html: localcurrency.title2}}></div>
                     </Header>
                      <Image size='tiny' centered src={banqueImage[localcurrency.imageTitle]} style={{marginTop:'13em'}}>
                      </Image>
                      <Header
                          as='h2'
                          content={localcurrency.underTitle}
                          style={{fontSize: '1.3em', fontWeight: 'normal', marginTop:'2em', textAlign: 'center',color: '#4F4F4F' }}
                      />
                    </Grid.Column>

                    <Grid.Column only='mobile tablet' width={15} verticalAlign='middle' centered textAlign='center' style={{marginTop: '1em', marginBottom: '2em'}}>
                      <Header
                        as='h2'
                        content={localcurrency.title}
                        style={{
                            fontSize: '2.5em',
                            textAlign: 'center',
                            fontWeight: '200',
                            marginTop: '1em',
                            color: 'white',
                            lineHeight: '1.3em',
                            letterSpacing: '-0.03em'
                        }}
                      />

                      <Header  as='h2' style={{fontSize: '1.1em', marginTop: '1em', textAlign: 'center', fontWeight: 'normal',
                       color: 'white', fontWeight:'normal'}}>
                       <div dangerouslySetInnerHTML={{__html: localcurrency.title2}}></div>
                     </Header>
                      <Image size='tiny' centered src={banqueImage[localcurrency.imageTitle]} style={{marginTop:'13em'}}>
                      </Image>
                      <Header
                          as='h2'
                          content={localcurrency.underTitle}
                          style={{fontSize: '1em', fontWeight: 'normal', marginTop:'2em', textAlign: 'center',color: '#4F4F4F' }}
                      />
                    </Grid.Column>

                </Grid>
            </Container>
        </Segment>

{/* "Partie en dessous du fond (définition monnaie locale)" */}
<Segment textAlign='center'
style={{ padding: '2em 2em'}}
verticalAlign='middle'
vertical>
<Grid textAlign='center'>
  <Grid.Column only='computer' width={16}>
    <Header as='h2' textAlign='center' style={{marginTop: '0em', marginBottom:'2em', fontWeight:'200', fontSize:'3em', color:'#4F4F4F'}}>
      <div dangerouslySetInnerHTML={{__html: localcurrency.features.mainTitle}}></div>
    </Header>
  </Grid.Column>
  <Grid.Column only='mobile tablet' width={16}>
    <Header as='h2' textAlign='center' style={{marginTop: '0em', marginBottom:'1em', fontWeight:'200', fontSize:'2em', color:'#4F4F4F'}}>
      <div dangerouslySetInnerHTML={{__html: localcurrency.features.mainTitle}}></div>
    </Header>
  </Grid.Column>
</Grid>
  <Grid className='propText' stackable>
    <Grid.Row columns={3}>
      <Grid.Column textAlign='center'>
        <Image centered size='tiny' src={banqueImage[localcurrency.features[0].image]}></Image>
        <Header as='h3' textAlign='center'
                style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
          <div dangerouslySetInnerHTML={{__html: localcurrency.features[0].title}}></div>
        </Header>
        <p style={{padding: '0em 2em', paddingBottom: '0em', fontSize: '1.1em', marginBottom:'1em'}}>
            <div dangerouslySetInnerHTML={{__html: localcurrency.features[0].content}}></div>
        </p>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Image centered size='tiny' src={banqueImage[localcurrency.features[1].image]}></Image>
        <Header as='h3' textAlign='center'
                style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
          <div dangerouslySetInnerHTML={{__html: localcurrency.features[1].title}}></div>
        </Header>
        <p style={{padding: '0em 2em', paddingBottom: '0em', fontSize: '1.1em', marginBottom:'1em'}}>
            <div dangerouslySetInnerHTML={{__html: localcurrency.features[1].content}}></div>
        </p>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Image centered size='tiny' src={banqueImage[localcurrency.features[2].image]}></Image>
        <Header as='h3' textAlign='center'
                style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
          <div dangerouslySetInnerHTML={{__html: localcurrency.features[2].title}}></div>
        </Header>
        <p style={{padding: '0em 2em', paddingBottom: '0em', fontSize: '1.1em', marginBottom:'1em'}}>
            <div dangerouslySetInnerHTML={{__html: localcurrency.features[2].content}}></div>
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>

{/* "Partie : a quoi sert une monnaie locale" */}
<Segment vertical style={{padding: '2em 2em', paddingBottom: '6em'}}>

  <Grid textAlign='center'>
    <Grid.Column only='computer' width={10}>
      <Header as='h2' textAlign='center' style={{marginTop: '1em', marginBottom:'2em', fontWeight:'200', fontSize:'3em', color:'#4F4F4F'}}>
        <div dangerouslySetInnerHTML={{__html: localcurrency.items.title}}></div>
      </Header>
    </Grid.Column>
    <Grid.Column only='mobile tablet' width={16}>
      <Header as='h2' textAlign='center' style={{marginTop: '1em', marginBottom:'2em', fontWeight:'200', fontSize:'2em', color:'#4F4F4F'}}>
        <div dangerouslySetInnerHTML={{__html: localcurrency.items.title}}></div>
      </Header>
    </Grid.Column>
  </Grid>

  <Grid className='propText' stackable>
    <Grid.Row verticalAlign='middle' columns={4} style={{paddingBottom:'5em'}}>
      <Grid.Column verticalAlign='middle' width={2}>
        <Image centered size='tiny' src={banqueImage[localcurrency.items[0].image]}></Image>
      </Grid.Column>
      <Grid.Column textAlign='left' width={6}>
        <Header as='h3'>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[0].title}}></div>
        </Header>
        <p style={{textAlign:'justify', fontSize:'1.1em'}}>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[0].content}}></div>
        </p>
      </Grid.Column>
      <Grid.Column verticalAlign='middle' width={2}>
        <Image centered size='tiny' src={banqueImage[localcurrency.items[1].image]}></Image>
      </Grid.Column>
      <Grid.Column textAlign='left' width={6}>
        <Header as='h3'>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[1].title}}></div>
        </Header>
        <p style={{textAlign:'justify', fontSize:'1.1em'}}>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[1].content}}></div>
        </p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row verticalAlign='middle' columns={4} style={{paddingBottom:'2em'}}>
      <Grid.Column verticalAlign='middle' width={2}>
        <Image centered size='tiny' src={banqueImage[localcurrency.items[2].image]}></Image>
      </Grid.Column>
      <Grid.Column textAlign='left' width={6}>
        <Header as='h3'>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[2].title}}></div>
        </Header>
        <p style={{textAlign:'justify', fontSize:'1.1em'}}>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[2].content}}></div>
        </p>
      </Grid.Column>
      <Grid.Column verticalAlign='middle' width={2}>
        <Image centered size='tiny' src={banqueImage[localcurrency.items[3].image]}></Image>
      </Grid.Column>
      <Grid.Column textAlign='left' width={6}>
        <Header as='h3'>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[3].title}}></div>
        </Header>
        <p style={{textAlign:'justify', fontSize:'1.1em'}}>
          <div dangerouslySetInnerHTML={{__html: localcurrency.items[3].content}}></div>
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>

{/* "Dernière partie en vert : Contactez-nous" */}
<Segment
    inverted
    textAlign='center'
    style={{backgroundColor: '#5ec4a9'}}
    verticalAlign='middle'
    vertical
>
    <Container>
        <Grid centered style={{marginTop: '3.5em', marginBottom: '4em'}}>
            <Grid.Column only='computer' width={10} centered textAlign='center'>
                <Header
                    as='h2'
                    style={{
                        fontSize: '2.5em', textAlign: 'center', fontWeight: '200', color: 'white',
                        letterSpacing: '-0.03em', lineHeight: '1.8em'
                    }}
                >
                    <div dangerouslySetInnerHTML={{__html: localcurrency.endpage.title}}></div>
                </Header>
                <Link to={'contactez-nous'}>
                  <Button className='MainButton' as='a' size='big' style={{marginTop: '1em'}}>
                      {localcurrency.endpage.buttontitle}
                      <Icon name='right arrow'/>
                  </Button>
                </Link>

                <Header
                    as='h2'
                    style={{
                        fontSize: '1.5em',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginTop: '2em',
                        color: 'white',
                        lineHeight: '1.3em',
                    }}
                >
                    <div dangerouslySetInnerHTML={{__html: localcurrency.endpage.title2}}></div>
                </Header>


            </Grid.Column>
            <Grid.Column only='mobile tablet' width={16} centered textAlign='center'>
                <Header
                    as='h2'
                    style={{
                        fontSize: '2em', textAlign: 'center', fontWeight: '200', color: 'white',
                        letterSpacing: '-0.03em', lineHeight: '1.8em'
                    }}
                >
                    <div dangerouslySetInnerHTML={{__html: localcurrency.endpage.title}}></div>
                </Header>
                <Link to={'contactez-nous'}>
                  <Button className='MainButton' as='a' size='small' style={{marginTop: '1em'}}>
                      {localcurrency.endpage.buttontitle}
                      <Icon name='right arrow'/>
                  </Button>
                </Link>

                <Header
                    as='h2'
                    style={{
                        fontSize: '1.2em',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginTop: '2em',
                        color: 'white',
                        lineHeight: '1.3em',
                    }}
                >
                    <div dangerouslySetInnerHTML={{__html: localcurrency.endpage.title2}}></div>
                </Header>


            </Grid.Column>
        </Grid>
    </Container>
</Segment>



                {/* <ChatBot/> */}
                <Footer/>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        )
    }
}

export default Home;

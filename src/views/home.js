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
    Card,
    Sidebar


} from 'semantic-ui-react'

import TopMenu from '../components/topmenu'
import SidebarMenu from '../components/sidebar'
import headerhome from '../images/headerHome.png'
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import functions from '../config/functions'
import firebase from '../config/initfirebase'
import banqueImage from '../images/home/index'
import Fond from '../images/home/fond.png'
import ChatBot from './chatbot'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var home = this.props.website.home

        return (
          <div>
          {/* Debut 1 */}
          <SidebarMenu ref='sidebarmenu'  closeSideBar={()=>this.refs.topmenu.shouldDisplay = false}/>
          <TopMenu     ref='topmenu' path={this.props.path} openSideBar={(bool)=>this.refs.sidebarmenu.setState({visible:bool})}/>
          <Sidebar.Pushable  >


          <Sidebar.Pusher>
            {/* fin 1 */}
                {/* 1ère Partie de la page en bleue */}
                <Segment
                    inverted
                    textAlign='center'
                    style={{
                        minHeight: 600,
                        padding: '1em 0em',
                        background: `url(${Fond}) no-repeat`,
                        backgroundSize: 'cover'
                    }}
                    >
                    <Container>
                        <Grid centered style={{marginTop: '5em'}}>
                            <Grid.Column only='computer' width={8} centered textAlign='center'>
                                <Header
                                    as='h2'
                                    content={home.title}
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
                                {/* <Button className='MainButton' inverted as='a' size='big' style={{marginTop: '1em'}}>
                                    {home.buttonTitle}
                                    <Icon name='right arrow'/>
                                </Button> */}
                                <div>
                                  <Image size='tiny' centered verticalAlign='bottom' src={banqueImage[home.imageTitle]} style={{marginTop:'9em'}}>
                                  </Image>
                                </div>
                                <Header
                                    as='h2'
                                    content={home.underTitle}
                                    style={{fontSize: '1.3em', fontWeight: 'normal', marginTop:'2em', textAlign: 'center',color: '#4F4F4F' }}
                                />
                            </Grid.Column>
                            <Grid.Column only='mobile' width={14} centered textAlign='center'>
                                <Header
                                    as='h2'
                                    content={home.title}
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
                                {/* <Button className='MainButton' inverted as='a' size='big' style={{marginTop: '1em'}}>
                                    {home.buttonTitle}
                                    <Icon name='right arrow'/>
                                </Button> */}
                                <div>
                                  <Image size='tiny' centered verticalAlign='bottom' src={banqueImage[home.imageTitle]} style={{marginTop:'8em'}}>
                                  </Image>
                                </div>
                                <Header
                                    as='h2'
                                    content={home.underTitle}
                                    style={{fontSize: '1em', fontWeight: 'normal', marginTop:'4em', textAlign: 'center',color: '#4F4F4F' }}
                                />
                            </Grid.Column>
                            <Grid.Column only='tablet' width={14} centered textAlign='center'>
                                <Header
                                    as='h2'
                                    content={home.title}
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
                                {/* <Button className='MainButton' inverted as='a' size='big' style={{marginTop: '1em'}}>
                                    {home.buttonTitle}
                                    <Icon name='right arrow'/>
                                </Button> */}
                                <div>
                                  <Image size='tiny' centered verticalAlign='bottom' src={banqueImage[home.imageTitle]} style={{marginTop:'11em'}}>
                                  </Image>
                                </div>
                                <Header
                                    as='h2'
                                    content={home.underTitle}
                                    style={{fontSize: '1em', fontWeight: 'normal', marginTop:'6em', textAlign: 'center',color: '#4F4F4F' }}
                                />
                            </Grid.Column>
                        </Grid>
                    </Container>
                </Segment>

                {/* Partie "Des outils réalisés pour vous" */}
                <Segment style={{padding: '3em 1em',}} vertical>
                    <Grid stackable columns={'3'} className='propText'>
                        <Grid.Row style={{marginTop: '1em'}}>
                            <Grid.Column only='computer' textAlign='center'>
                                <Image centered size='tiny' src={banqueImage[home.features[0].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[0].title}}></div>
                                </Header>
                                <p style={{padding: '0em 3em', paddingBottom: '1em', fontSize:'1.1em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[0].content}}></div>
                                </p>
                                <Link to={'fonctionnalites'}>
                                  <Button className='boutonMLC2' size='large' textAlign='center'>
                                    {home.features[0].button}
                                    <Icon name='right arrow'/>
                                  </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column only='mobile tablet' textAlign='center'>
                                <Image centered size='tiny' src={banqueImage[home.features[0].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[0].title}}></div>
                                </Header>
                                <p style={{padding: '0em 3em', paddingBottom: '1em', fontSize:'1.1em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[0].content}}></div>
                                </p>
                                <Link to={'fonctionnalites'}>
                                  <Button className='boutonMLC2' size='small' textAlign='center'>
                                    {home.features[0].button}
                                    <Icon name='right arrow'/>
                                  </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column only='computer' textAlign='center'>
                                <Image centered size='tiny' src={banqueImage[home.features[1].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[1].title}}></div>
                                </Header>
                                <p style={{padding: '0em 3em', paddingBottom: '1em', fontSize:'1.1em'}}>
                                    <div dangerouslySetInnerHTML={{__html:home.features[1].content}}></div>
                                </p>
                                <Link to={'offres'}>
                                  <Button className='boutonMLC2' size='large' textAlign='center'>
                                    {home.features[1].button}
                                    <Icon name='right arrow'/>
                                  </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column only='mobile tablet' textAlign='center'>
                                <Image centered size='tiny' src={banqueImage[home.features[1].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[1].title}}></div>
                                </Header>
                                <p style={{padding: '0em 3em', paddingBottom: '1em', fontSize:'1.1em'}}>
                                    <div dangerouslySetInnerHTML={{__html:home.features[1].content}}></div>
                                </p>
                                <Link to={'offres'}>
                                  <Button className='boutonMLC2' size='small' textAlign='center'>
                                    {home.features[1].button}
                                    <Icon name='right arrow'/>
                                  </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column only='computer' textAlign='center'>
                                <Image centered size='tiny' src={banqueImage[home.features[2].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[2].title}}></div>
                                </Header>
                                <p style={{padding: '0em 3em', paddingBottom: '1em', fontSize:'1.1em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[2].content}}></div>
                                </p>
                                <Link to={'monkeymoney'}>
                                  <Button className='boutonMLC2' size='large' textAlign='center'>
                                      {home.features[2].button}
                                      <Icon name='right arrow'/>
                                  </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column only='mobile tablet' textAlign='center'>
                                <Image centered size='tiny' src={banqueImage[home.features[2].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[2].title}}></div>
                                </Header>
                                <p style={{padding: '0em 3em', paddingBottom: '1em', fontSize:'1.1em'}}>
                                    <div dangerouslySetInnerHTML={{__html: home.features[2].content}}></div>
                                </p>
                                <Link to={'monkeymoney'}>
                                  <Button className='boutonMLC2' size='small' textAlign='center'>
                                      {home.features[2].button}
                                      <Icon name='right arrow'/>
                                  </Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                {/* Partie "Au service des monnaies locales" */}
                <Segment style={{padding: '3em 0em', backgroundColor: '#f7f9fa'}} vertical>
                    <Grid style={{padding: '0em 0em', margin:'0'}} vertical textAlign='center'>
                      <Grid.Row column={1}>
                        <Grid.Column width={14} only='computer'>
                          <Header as='h2' textAlign='center' style={{
                              margin: 'auto',
                              marginTop: '1em',
                              marginBottom: '1em',
                              fontWeight: '200',
                              fontSize: '3em',
                              color: '#4F4F4F',
                              maxWidth: '400px'
                          }}
                          >
                              <div dangerouslySetInnerHTML={{__html: home.items[0].title}}></div>

                          </Header>


                          <p style={{
                              fontSize: '1.2em',
                              textAlign: 'justify',
                              color: '#605E5E',
                              marginTop: '3.6em',
                              padding: '0em 5.2em',
                              paddingBottom: '2em'
                          }}>
                              <div dangerouslySetInnerHTML={{__html: home.items[0].label}}></div>
                               
                          </p>
                          <Link to={'monnaielocale'}>
                            <Button className='boutonMLC' textAlign='center' primary size='big' style={{marginTop: '1em'}}>
                                {home.items[0].button}
                                <Icon name='right arrow'/>
                            </Button>
                          </Link>
                        </Grid.Column>
                        <Grid.Column only='mobile tablet' width={14}>
                          <Header as='h2' textAlign='center' style={{
                              margin: 'auto',
                              marginTop: '1em',
                              marginBottom: '1em',
                              fontWeight: '200',
                              fontSize: '2em',
                              color: '#4F4F4F',
                              maxWidth: '400px'
                          }}
                          >
                              <div dangerouslySetInnerHTML={{__html: home.items[0].title}}></div>

                          </Header>


                          <p style={{
                              fontSize: '1.1em',
                              textAlign: 'justify',
                              color: '#605E5E',
                              marginTop: '3.6em',
                              padding: '0em 1em',
                              paddingBottom: '2em'
                          }}>
                              <div dangerouslySetInnerHTML={{__html: home.items[0].label}}></div>
                               
                          </p>
                          <Link to={'monnaielocale'}>
                            <Button className='boutonMLC' textAlign='center' primary size='small' style={{marginTop: '1em'}}>
                                {home.items[0].button}
                                <Icon name='right arrow'/>
                            </Button>
                          </Link>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                </Segment>


                {/* Segment => Module 1 : Gesiton de sa monnaie */}
                <Segment style={{minHeight: '500', padding: '3em 1em', color: "#4F4F4F"}} vertical>
                  <Grid>
                    <Grid.Row column={1}>
                      <Grid.Column only='computer' width={16} textAlign='center'>
                        <Header as='h2' style={{
                            color: 'inherit',
                            marginTop: '1em',
                            marginBottom: '1em',
                            fontWeight: 'normal',
                            fontSize: '3em',
                            paddingLeft: '6em',
                            paddingRight: '6em'
                        }}>
                            <div dangerouslySetInnerHTML={{__html: home.items[1].title}}></div>
                        </Header>
                        <Header as='h3' textAlign='center'
                                style={{color: '#4F4F4F', fontSize: '1.5em', paddingTop:'1em', paddingBottom: '1.5em'}}>
                            <div dangerouslySetInnerHTML={{__html: home.items[1].title1}}></div>
                        </Header>
                      </Grid.Column>
                      <Grid.Column only='mobile tablet' width={16} textAlign='center'>
                        <Header as='h2' style={{
                            color: 'inherit',
                            marginTop: '1em',
                            marginBottom: '1em',
                            fontWeight: 'normal',
                            fontSize: '2em',
                        }}>
                            <div dangerouslySetInnerHTML={{__html: home.items[1].title}}></div>
                        </Header>
                        <Header as='h3' textAlign='center'
                                style={{color: '#4F4F4F', fontSize: '1.5em', paddingTop:'1em', paddingBottom: '1.5em'}}>
                            <div dangerouslySetInnerHTML={{__html: home.items[1].title1}}></div>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row columns={2} verticalAlign='middle' style={{paddingTop: '2em', marginBottom: '1em'}}>
                            <Grid.Column only='computer' width={5} style={{padding: "1em 5em 0em 1em"}}>
                                <Card raised floated='left' style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[1].minititle1}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[1].label1}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised floated='left' style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[1].minititle2}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[1].label2}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised floated='left' style={{backgroundColor: '#f7f9fa'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[1].minititle3}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[1].label3}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column textAlign='center' only='mobile tablet' width={16}>
                              <Image centered size="big" style={{marginBottom:'2em'}} src={banqueImage[home.items[1].image]}/>
                              <Card.Group stackable itemsPerRow={3}>
                                <Card raised centered style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[1].minititle1}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[1].label1}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised centered style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[1].minititle2}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[1].label2}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised centered style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[1].minititle3}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[1].label3}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                              </Card.Group>
                            </Grid.Column>
                            <Grid.Column only='computer' width={11} style={{padding: "1em 2em 0em 2em"}}>
                                <Image centered size="massive" src={banqueImage[home.items[1].image]}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                {/* Segment => Module 2 : Communauté digitale */}
                <Segment style={{minHeight: '500', padding: '3em 1em', color: "#4F4F4F", backgroundColor: '#f7f9fa'}}
                         vertical>

                   <Header as='h3' textAlign='center'
                           style={{color: '#4F4F4F', fontSize: '1.5em', paddingBottom: '1em'}}>
                       <div dangerouslySetInnerHTML={{__html: home.items[2].title}}></div>
                   </Header>

                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row columns={2} verticalAlign='middle' style={{paddingTop: '2em', marginBottom: '1em'}}>
                            <Grid.Column only='computer' width={11} style={{padding: "1em 2em"}}>
                                <Image centered size="massive" src={banqueImage[home.items[2].img]}/>
                            </Grid.Column>

                            <Grid.Column only='computer' width={5} style={{padding: "1em 1em 0em 5em"}}>

                                <Card raised floated='right' style={{marginBottom:'2em'}}>
                                  <Card.Content textAlign='left'>
                                    <Card.Header as='h3'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[2].minititle0}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[2].label0}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised floated='right' style={{marginBottom:'2em'}}>
                                  <Card.Content textAlign='left'>
                                    <Card.Header as='h3'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[2].minititle1}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[2].label1}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised floated='right'>
                                  <Card.Content textAlign='left'>
                                    <Card.Header as='h3'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[2].minititle2}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[2].label2}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column only='mobile tablet' width={16}>
                              <Image centered size="big" style={{marginBottom:'2em'}} src={banqueImage[home.items[2].img]}/>
                              <Card.Group stackable itemsPerRow={3}>
                                <Card raised centered style={{marginBottom:'2em'}}>
                                  <Card.Content textAlign='left'>
                                    <Card.Header as='h3'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[2].minititle0}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[2].label0}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised centered style={{marginBottom:'2em'}}>
                                  <Card.Content textAlign='left'>
                                    <Card.Header as='h3'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[2].minititle1}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[2].label1}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised centered>
                                  <Card.Content textAlign='left'>
                                    <Card.Header as='h3'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[2].minititle2}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[2].label2}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                              </Card.Group>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>

                </Segment>

                {/* Module 3 : Dématérialiser sa monnaie */}

                <Segment vertical style={{
                    minHeight: '500',
                    padding: '3em 1em',
                    color: "#4F4F4F"
                }}>
                <Header as='h3' textAlign='center'
                        style={{color: '#4F4F4F', fontSize: '1.5em', paddingBottom: '1em'}}>
                    <div dangerouslySetInnerHTML={{__html: home.items[3].title}}></div>
                </Header>

                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row columns={2} verticalAlign='middle' style={{paddingTop: '2em', marginBottom: '1em'}}>
                            <Grid.Column only='computer' width={5} style={{padding: "1em 5em 0em 1em"}}>

                                <Card raised floated='left' style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[3].minititle1}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[3].label1}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised floated='left' style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[3].minititle2}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[3].label2}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised floated='left' style={{backgroundColor: '#f7f9fa'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[3].minititle3}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[3].label3}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column only='mobile tablet' width={16}>
                              <Image centered size="big" style={{marginBottom:'2em'}} src={banqueImage[home.items[3].image]}/>
                              <Card.Group stackable itemsPerRow={3}>
                                <Card raised centered style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[3].minititle1}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[3].label1}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised centered style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[3].minititle2}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[3].label2}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                                <Card raised centered style={{backgroundColor: '#f7f9fa', marginBottom:'2em'}}>
                                  <Card.Content>
                                    <Card.Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: home.items[3].minititle3}}></div>
                                    </Card.Header>
                                    <Card.Description style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {home.items[3].label3}
                                    </Card.Description>
                                  </Card.Content>
                                </Card>
                              </Card.Group>
                            </Grid.Column>

                            <Grid.Column only='computer' width={11} style={{padding: "1em 2em"}}>
                                <Image centered size="massive" src={banqueImage[home.items[3].image]}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                {/* Dernière partie page d'acceuil  */}

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
                                    <div dangerouslySetInnerHTML={{__html: home.items[4].title}}></div>
                                </Header>

                                <Button className='MainButton' as='a' size='big' style={{marginTop: '1em'}}>
                                    {home.items[4].buttontitle}
                                    <Icon name='right arrow'/>
                                </Button>

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
                                    <div dangerouslySetInnerHTML={{__html: home.items[4].title2}}></div>
                                </Header>


                            </Grid.Column>
                            <Grid.Column only='mobile tablet' width={14} centered textAlign='center'>
                                <Header
                                    as='h2'
                                    style={{
                                        fontSize: '2em', textAlign: 'center', fontWeight: '200', color: 'white',
                                        letterSpacing: '-0.03em', lineHeight: '1.8em'
                                    }}
                                >
                                    <div dangerouslySetInnerHTML={{__html: home.items[4].title}}></div>
                                </Header>

                                <Button className='MainButton' as='a' size='small' style={{marginTop: '1em'}}>
                                    {home.items[4].buttontitle}
                                    <Icon name='right arrow'/>
                                </Button>

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
                                    <div dangerouslySetInnerHTML={{__html: home.items[4].title2}}></div>
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

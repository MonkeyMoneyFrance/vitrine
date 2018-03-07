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
    Sidebar,
    Dimmer, Loader
} from 'semantic-ui-react'
import MenuContainer from '../components/menucontainer'
import TopMenu from '../components/topmenu'
import SidebarMenu from '../components/sidebar';
import headerhome from '../images/headerHome.png'
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import ChatBot from './chatbot'
import firebase from '../config/initfirebase'
import Fond from '../images/home/fond.png'
import banqueImage from '../images/home/index'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }



    render() {
      var company = this.props.website.company

        return (
          <div>
            <SidebarMenu ref='sidebarmenu'  closeSideBar={()=>this.refs.topmenu.shouldDisplay = false}/>
            <TopMenu     ref='topmenu' path={this.props.path} openSideBar={(bool)=>this.refs.sidebarmenu.setState({visible:bool})}/>
            <Sidebar.Pushable  >

          <Sidebar.Pusher>
            {/* 1ère partie bleue */}
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
                          <Grid.Column only='computer' width={8} centered textAlign='center'>
                              <Header
                                  width={8}
                                  as='h2'
                                  content={company.title}
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
                              <Image size='tiny' centered src={banqueImage[company.imageTitle]} style={{marginTop:'9em'}}>
                              </Image>
                              <Header
                                  as='h2'
                                  content={company.underTitle}
                                  style={{fontSize: '1.3em', fontWeight: 'normal', marginTop:'2em', textAlign: 'center',color: '#4F4F4F' }}
                              />
                          </Grid.Column>
                          <Grid.Column only='mobile tablet' width={14} centered textAlign='center'>
                              <Header
                                  width={14}
                                  as='h2'
                                  content={company.title}
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
                              <Image size='tiny' centered src={banqueImage[company.imageTitle]} style={{marginTop:'9em'}}>
                              </Image>
                              <Header
                                  as='h2'
                                  content={company.underTitle}
                                  style={{fontSize: '1em', fontWeight: 'normal', marginTop:'2em', textAlign: 'center',color: '#4F4F4F' }}
                              />
                          </Grid.Column>
                        </Grid>
                    </Container>
                </Segment>

{/* 2ème partie : Qui sommes-nous ? */}
<Segment style={{padding: '3em 0em', backgroundColor: '#f7f9fa'}} vertical>
    <Container style={{padding: '0em 0em'}} vertical textAlign='center'>
      <Grid textAlign='center'>
        <Grid.Column only='computer' width={16}>
          <Header as='h2' textAlign='center' style={{
              margin: 'auto',
              marginTop: '1em',
              marginBottom: '1em',
              fontWeight: '200',
              fontSize: '3em',
              color: '#4F4F4F',
          }}
          >
              <div dangerouslySetInnerHTML={{__html: company.secondItem.title}}></div>

          </Header>


          <p style={{
              fontSize: '1.2em',
              textAlign: 'justify',
              color: '#605E5E',
              marginTop: '3.6em',
              padding: '0em 5.2em',
              paddingBottom: '2em'
          }}>
              <div dangerouslySetInnerHTML={{__html: company.secondItem.content}}></div>
               
          </p>
        </Grid.Column>

        <Grid.Column only='mobile tablet' width={16}>
          <Header as='h2' textAlign='center' style={{
              margin: 'auto',
              marginTop: '1em',
              marginBottom: '1em',
              fontWeight: '200',
              fontSize: '2em',
              color: '#4F4F4F',
          }}
          >
              <div dangerouslySetInnerHTML={{__html: company.secondItem.title}}></div>

          </Header>


          <p style={{
              fontSize: '1.1em',
              textAlign: 'justify',
              color: '#605E5E',
              marginTop: '3.6em',
              padding: '0em 2em',
              paddingBottom: '2em'
          }}>
              <div dangerouslySetInnerHTML={{__html: company.secondItem.content}}></div>
               
          </p>
        </Grid.Column>

      </Grid>
    </Container>
</Segment>

{/* Partie : l'équipe */}
<Segment style={{padding: '3em 1em', paddingBottom:'5em'}} vertical>
  <Grid textAlign='center'>
    <Grid.Column only='computer' width={16}>
      <Header as='h2' textAlign='center' style={{
          margin: 'auto',
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: '200',
          fontSize: '3em',
          color: '#4F4F4F',
      }}
      >
          <div dangerouslySetInnerHTML={{__html: company.team.title}}></div>

      </Header>
    </Grid.Column>
    <Grid.Column only='mobile tablet' width={16}>
      <Header as='h2' textAlign='center' style={{
          margin: 'auto',
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: '200',
          fontSize: '2em',
          color: '#4F4F4F',
      }}
      >
          <div dangerouslySetInnerHTML={{__html: company.team.title}}></div>

      </Header>
    </Grid.Column>
  </Grid>
    <Grid stackable columns={'4'} className='propText'>
        <Grid.Row style={{marginTop: '1em', paddingTop: '2em'}}>
            <Grid.Column textAlign='center'>
                <Image centered size='small' src={banqueImage[company.team[0].image]}></Image>
                <Header as='h3' textAlign='center'
                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.team[0].title}}></div>
                </Header>
                <p style={{padding: '0em 0.5em', paddingBottom: '0em', fontSize:'1.1em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.team[0].content}}></div>
                </p>
            </Grid.Column>
            <Grid.Column>
                <Image centered size='small' src={banqueImage[company.team[1].image]}></Image>
                <Header as='h3' textAlign='center'
                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.team[1].title}}></div>
                </Header>
                <p style={{padding: '0em 0.5em', paddingBottom: '0em', fontSize:'1.1em'}}>
                    <div dangerouslySetInnerHTML={{__html:company.team[1].content}}></div>
                </p>
            </Grid.Column>
            <Grid.Column>
                <Image circular centered size='small' src={banqueImage[company.team[2].image]}></Image>
                <Header as='h3' textAlign='center'
                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.team[2].title}}></div>
                </Header>
                <p style={{padding: '0em 0.5em', paddingBottom: '0em', fontSize:'1.1em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.team[2].content}}></div>
                </p>
            </Grid.Column>
            <Grid.Column>
                <Image circular centered size='small' src={banqueImage[company.team[3].image]}></Image>
                <Header as='h3' textAlign='center'
                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.team[3].title}}></div>
                </Header>
                <p style={{padding: '0em 0.5em', paddingBottom: '0em', fontSize:'1.1em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.team[3].content}}></div>
                </p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  </Segment>

{/* Partie : Partenaires et récompenses */}
<Segment style={{padding: '3em 1em', backgroundColor: '#f7f9fa', paddingBottom:'6em'}} vertical>
  <Grid textAlign='center'>
    <Grid.Column only='computer' width={16}>
      <Header as='h2' textAlign='center' style={{
          margin: 'auto',
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: '200',
          fontSize: '3em',
          color: '#4F4F4F',
      }}
      >
          <div dangerouslySetInnerHTML={{__html: company.partners.title}}></div>

      </Header>
    </Grid.Column>
    <Grid.Column only='mobile tablet' width={16}>
      <Header as='h2' textAlign='center' style={{
          margin: 'auto',
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: '200',
          fontSize: '2em',
          color: '#4F4F4F',
      }}
      >
          <div dangerouslySetInnerHTML={{__html: company.partners.title}}></div>

      </Header>
    </Grid.Column>
  </Grid>

    <Grid verticalAlign='top' stackable  className='propText'>
        <Grid.Row columns={5} style={{marginTop: '1em'}}>
            <Grid.Column textAlign='center' style={{ padding:'1em 1em'}}>
              <div className='divDisplay'>
                <Link to={'http://novimpact.org/'} target="_blank">
                  <Image style={{height:'100px', width:'auto'}} src={banqueImage[company.partners[0].image]}></Image>
                </Link>
              </div>
                <p style={{padding: '0em 0.5em', fontSize:'1.1em'}}>
                    <div dangerouslySetInnerHTML={{__html: company.partners[0].content}}></div>
                </p>
            </Grid.Column>
            <Grid.Column style={{padding:'1em 1em'}}>
                <div className='divDisplay'>
                  <Link to={'http://www.levillagebyca.com/startup/monkey-money/'} target="_blank">
                    <Image height={100} width='auto' centered size='small' src={banqueImage[company.partners[1].image]}></Image>
                  </Link>
                </div>
                <p style={{padding: '0em 0.5em', fontSize:'1.1em'}}>
                  <div dangerouslySetInnerHTML={{__html:company.partners[1].content}}></div>
                </p>
            </Grid.Column>
            <Grid.Column style={{padding:'1em 1em'}}>
                <div className='divDisplay'>
                  <Link to={'http://antropia.essec.fr/portfolio/monkey-money/'} target="_blank">
                    <Image height={100} width='auto' centered size='small' src={banqueImage[company.partners[2].image]}></Image>
                  </Link>
                </div>
                <p style={{padding: '0em 0.5em', fontSize:'1.1em'}}>
                  <div dangerouslySetInnerHTML={{__html: company.partners[2].content}}></div>
                </p>
            </Grid.Column>
            <Grid.Column style={{padding:'1em 1em'}}>
                <div className='divDisplay'>
                  <Link to={'https://lafabrique-france.aviva.com/voting/projet/vue/17-943'} target="_blank">
                    <Image height={100} width='auto' centered size='small' src={banqueImage[company.partners[3].image]}></Image>
                  </Link>
                </div>
                <p style={{padding: '0em 0.5em', fontSize:'1.1em'}}>
                  <div dangerouslySetInnerHTML={{__html: company.partners[3].content}}></div>
                </p>
            </Grid.Column>
            <Grid.Column style={{padding:'1em 1em'}}>
                <div className='divDisplay'>
                  <Link to={'http://mouves.org/'} target="_blank">
                    <Image height={100} width='auto' centered size='small' src={banqueImage[company.partners[4].image]}></Image>
                  </Link>
                </div>
                <p style={{padding: '0em 0.5em', fontSize:'1.1em'}}>
                  <div dangerouslySetInnerHTML={{__html: company.partners[4].content}}></div>
                </p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  </Segment>

{/* Dernière partie en vert : Rejoignez-nous */}
<Segment
    inverted
    textAlign='center'
    style={{backgroundColor: '#5ec4a9'}}
    verticalAlign='middle'
    vertical
>
    <Container>
        <Grid className='propText' centered style={{marginTop: '3.5em', marginBottom: '4em'}}>
            <Grid.Column only='computer' width={12} centered textAlign='center'>
                <Header
                    as='h2'
                    style={{
                        fontSize: '2.5em', textAlign: 'center', fontWeight: '200', color: 'white',
                        letterSpacing: '-0.03em', lineHeight: '1.8em'
                    }}
                >
                    <div dangerouslySetInnerHTML={{__html: company.endPage.title}}></div>
                </Header>
                <Header as='h2'
                style={{
                    fontSize: '1.5em',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop: '2em',
                    color: 'white',
                    lineHeight: '1.3em',
                }}>
                  <div dangerouslySetInnerHTML={{__html: company.endPage.title1}}></div>
                </Header>
                <Link to={'contactez-nous'}>
                  <Button className='MainButton' as='a' size='big' style={{marginTop: '1em'}}>
                      {company.endPage.buttonTitle}
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
                    <div dangerouslySetInnerHTML={{__html: company.endPage.title2}}></div>
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
                    <div dangerouslySetInnerHTML={{__html: company.endPage.title}}></div>
                </Header>
                <Header as='h2'
                style={{
                    fontSize: '1.2em',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop: '2em',
                    color: 'white',
                    lineHeight: '1.3em',
                }}>
                  <div dangerouslySetInnerHTML={{__html: company.endPage.title1}}></div>
                </Header>
                <Link to={'contactez-nous'}>
                  <Button className='MainButton' as='a' size='small' style={{marginTop: '1em'}}>
                      {company.endPage.buttonTitle}
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
                    <div dangerouslySetInnerHTML={{__html: company.endPage.title2}}></div>
                </Header>


            </Grid.Column>
        </Grid>
    </Container>
</Segment>

                {/* <ChatBot/> */}
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        )
    }
}

export default Home;

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
    Table,
    Card,
    Sidebar
} from 'semantic-ui-react'
import MenuContainer from '../components/menucontainer'
import TopMenu from '../components/topmenu'
import SidebarMenu from '../components/sidebar';
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import ChatBot from './chatbot';
import banqueImage from '../images/home/index'
import Fond from '../images/home/fond.png'
import firebase from '../config/initfirebase'
import {Link} from 'react-router-dom'


class Prices extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      var prices = this.props.website.prices
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
                                    content={prices.title}
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
                                <Image size='tiny' centered src={banqueImage[prices.imageTitle]} style={{marginTop:'9em'}}>
                                </Image>
                                <Header
                                    as='h2'
                                    content={prices.underTitle}
                                    style={{fontSize: '1.3em', fontWeight: 'normal', marginTop:'2em', textAlign: 'center',color: '#4F4F4F' }}
                                />
                            </Grid.Column>
                            <Grid.Column only='mobile tablet' width={15} centered textAlign='center'>
                                <Header
                                    width={16}
                                    as='h2'
                                    content={prices.title}
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
                                <Image size='tiny' centered src={banqueImage[prices.imageTitle]} style={{marginTop:'9em'}}>
                                </Image>
                                <Header
                                    as='h2'
                                    content={prices.underTitle}
                                    style={{fontSize: '1em', fontWeight: 'normal', marginTop:'3em', textAlign: 'center',color: '#4F4F4F' }}
                                />
                            </Grid.Column>
                        </Grid>
                    </Container>
                </Segment>

 {/* 2ème partie : avantages de la solution Monkey Money */}
                    <Segment
                        textAlign='center'
                        style={{ padding: '3em 1em'}}
                        verticalAlign='middle'
                        vertical
                    >
                            <Grid className='propText' stackable columns={4}>
                                <Grid.Row>
                                  <Grid.Column textAlign='center'>
                                       <Image centered size='tiny' src={banqueImage[prices.features[0].image]}></Image>
                                      <Header as='h3' textAlign='center'
                                              style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                          <div dangerouslySetInnerHTML={{__html: prices.features[0].title}}></div>
                                      </Header>
                                      <p style={{padding: '0em 2em', paddingBottom: '0em'}}>
                                          {prices.features[0].content}
                                      </p>
                                  </Grid.Column>
                                  <Grid.Column>
                                      <Image centered size='tiny' src={banqueImage[prices.features[1].image]}></Image>
                                      <Header as='h3' textAlign='center'
                                              style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                          <div dangerouslySetInnerHTML={{__html: prices.features[1].title}}></div>
                                      </Header>
                                      <p style={{padding: '0em 2em', paddingBottom: '0em'}}>
                                          {prices.features[1].content}
                                      </p>
                                  </Grid.Column>
                                  <Grid.Column>
                                      <Image centered size='tiny' src={banqueImage[prices.features[2].image]}></Image>
                                      <Header as='h3' textAlign='center'
                                              style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                          <div dangerouslySetInnerHTML={{__html: prices.features[2].title}}></div>
                                      </Header>
                                      <p style={{padding: '0em 2em', paddingBottom: '0em'}}>
                                          {prices.features[2].content}
                                      </p>
                                  </Grid.Column>
                                  <Grid.Column>
                                      <Image centered size='tiny' src={banqueImage[prices.features[3].image]}></Image>
                                      <Header as='h3' textAlign='center'
                                              style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                          <div dangerouslySetInnerHTML={{__html: prices.features[3].title}}></div>
                                      </Header>
                                      <p style={{padding: '0em 2em', paddingBottom: '0em'}}>
                                          {prices.features[3].content}
                                      </p>
                                  </Grid.Column>
                                </Grid.Row>
                            </Grid>
                    </Segment>

{/* Tableau des prix */}

                <Segment textAlign='center' verticalAlign='middle' vertical style={{paddingBottom:'6em'}} >
                  <Grid textAlign='center'>
                    <Grid.Column only='computer' width={16}>
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
                          <div dangerouslySetInnerHTML={{__html: prices.items.Title}}></div>
                      </Header>

                      <p style={{
                          fontSize: '1.2em',
                          textAlign: 'center',
                          color: '#605E5E',
                          marginTop: '3.6em',
                          padding: '0em 5.2em',
                          paddingBottom: '2em'
                      }}>
                          <div dangerouslySetInnerHTML={{__html: prices.items.content}}></div>
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
                          maxWidth: '400px'
                      }}
                      >
                          <div dangerouslySetInnerHTML={{__html: prices.items.Title}}></div>
                      </Header>

                      <p style={{
                          fontSize: '1.2em',
                          textAlign: 'center',
                          color: '#605E5E',
                          marginTop: '3.6em',
                          padding: '0em 2.2em',
                          paddingBottom: '2em'
                      }}>
                          <div dangerouslySetInnerHTML={{__html: prices.items.content}}></div>
                           
                      </p>
                    </Grid.Column>
                  </Grid>
                  <Grid stackable textAlign='center'>
                    <Grid.Row  centered columns={3}>

{/* Tableau Prix Offre 1*/}
                      <Grid.Column textAlign='center' width={4}>
                        <Image.Group>
                          <Image centered size='mini' src={banqueImage[prices.items.offre1.Image]}></Image>
                        </Image.Group>
                        <Table centered celled textAlign='center' style={{maxWidth:'300px'}}>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>
                                {prices.items.offre1.Title}
                              </Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[0]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[1]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[2]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[3]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell style={{color:'#f4f2f2'}} >
                                {prices.items.function[4]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell style={{color:'#f4f2f2'}}>
                                {prices.items.function[5]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell style={{color:'#f4f2f2'}}>
                                {prices.items.function[6]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell style={{color:'#f4f2f2'}}>
                                {prices.items.function[7]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell style={{color:'#f4f2f2'}}>
                                {prices.items.function[8]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell style={{color:'#f4f2f2'}}>
                                {prices.items.function[9]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[10]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[11]}
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                        <Table centered textAlign='center' style={{maxWidth:'300px'}}>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>
                                <div dangerouslySetInnerHTML={{__html: prices.items.titlePrix}}></div>
                              </Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>
                                <div dangerouslySetInnerHTML={{__html: prices.items.offre1.prixTrader}}></div>
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <div dangerouslySetInnerHTML={{__html: prices.items.offre1.prixUser}}></div>
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </Grid.Column>

{/* Tableau Prix Offre 2 */}
                        <Grid.Column textAlign='center' width={4} style={{marginRight:'4em', marginLeft:'4em'}}>
                          <Image.Group centered size='mini'>
                            <Image  src={banqueImage[prices.items.offre1.Image]}></Image>
                            <Image  src={banqueImage[prices.items.offre2.Image]}></Image>
                          </Image.Group>
                          <Table celled centered textAlign='center' style={{maxWidth:'300px'}}>
                            <Table.Header>
                              <Table.Row>
                                <Table.HeaderCell style={{backgroundColor: '#5ec4a9', color:'white', fontWeight:'bold'}}>
                                {prices.items.offre2.Title}
                              </Table.HeaderCell>
                              </Table.Row>
                            </Table.Header>
                            <Table.Body>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[0]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[1]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[2]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[3]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[4]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[5]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[6]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell style={{color:'#f4f2f2'}}>
                                  {prices.items.function[7]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell style={{color:'#f4f2f2'}}>
                                  {prices.items.function[8]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell style={{color:'#f4f2f2'}}>
                                  {prices.items.function[9]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[10]}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  {prices.items.function[11]}
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                          <Table centered textAlign='center' style={{maxWidth:'300px'}}>
                            <Table.Header>
                              <Table.Row>
                                <Table.HeaderCell style={{backgroundColor: '#5ec4a9', color:'white', fontWeight:'bold'}}>
                                  <div dangerouslySetInnerHTML={{__html:prices.items.titlePrix}}></div>
                                </Table.HeaderCell>
                              </Table.Row>
                            </Table.Header>
                            <Table.Body>
                              <Table.Row>
                                <Table.Cell>
                                  <div dangerouslySetInnerHTML={{__html:prices.items.offre2.prixTrader}}></div>
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <div dangerouslySetInnerHTML={{__html:prices.items.offre2.prixUser}}></div>
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                      </Grid.Column>

{/* Tableau Prix Offre 3 */}
                      <Grid.Column textAlign='center' width={4}>
                        <Image.Group centered size='mini'>
                          <Image  src={banqueImage[prices.items.offre1.Image]}></Image>
                          <Image  src={banqueImage[prices.items.offre2.Image]}></Image>
                          <Image  src={banqueImage[prices.items.offre3.Image]}></Image>
                        </Image.Group>
                        <Table celled centered textAlign='center' style={{maxWidth:'300px'}}>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell style={{backgroundColor: '#58caf1', color:'white', fontWeight:'bold'}}>
                              {prices.items.offre3.Title}
                            </Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[0]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[1]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[2]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[3]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[4]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[5]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[6]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[7]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[8]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[9]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[10]}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                {prices.items.function[11]}
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                        <Table centered textAlign='center' style={{maxWidth:'300px'}}>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell style={{backgroundColor: '#58caf1', color:'white', fontWeight:'bold'}}>
                                <div dangerouslySetInnerHTML={{__html:prices.items.titlePrix}}></div>
                              </Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>
                                <div dangerouslySetInnerHTML={{__html:prices.items.offre3.prixTrader}}></div>
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <div dangerouslySetInnerHTML={{__html:prices.items.offre3.prixUser}}></div>
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <div dangerouslySetInnerHTML={{__html:prices.items.offre3.commissionAdhesion}}></div>
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <div dangerouslySetInnerHTML={{__html:prices.items.offre3.commissionPay}}></div>
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </Grid.Column>

                    </Grid.Row>
                  </Grid>
                </Segment>

{/* Partie questions fréquentes */}
<Segment centered verticalAlign='middle' vertical style=
  {{paddingTop:'1em',
  paddingLeft: '1em',
  paddingBottom:'7em',
  paddingRight:'1em',
  backgroundColor: '#f7f9fa'
}}>
<Grid textAlign='center'>
  <Grid.Column only='computer' width={16}>
    <Header as='h2' textAlign='center' style={{
          margin: 'auto',
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: '200',
          fontSize: '3em',
          color: '#4F4F4F',
          paddingBottom: '1em'
      }}
      >
          <div dangerouslySetInnerHTML={{__html: prices.faq.mainTitle}}></div>
    </Header>
  </Grid.Column>
  <Grid.Column only='mobile tablet' width={16} >
    <Header as='h2' textAlign='center' style={{
          margin: 'auto',
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: '200',
          fontSize: '2em',
          color: '#4F4F4F',
          paddingBottom: '1em'
      }}
      >
          <div dangerouslySetInnerHTML={{__html: prices.faq.mainTitle}}></div>
    </Header>
  </Grid.Column>
</Grid>
  <Grid stackable centered>
    <Grid.Row  centered columns={2}>
      <Grid.Column width={7} style={{marginRight:'1em'}}>
        <Header as='h3'
                style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
          <div dangerouslySetInnerHTML={{__html:prices.faq[0].title}}></div>
        </Header>
        <p>
          <div dangerouslySetInnerHTML={{__html:prices.faq[0].content}}></div>
        </p>
      </Grid.Column>
      <Grid.Column width={7} style={{marginLeft:'1em'}}>
        <Header as='h3'
                style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
          <div dangerouslySetInnerHTML={{__html:prices.faq[1].title}}></div>
        </Header>
        <p>
          <div dangerouslySetInnerHTML={{__html:prices.faq[1].content}}></div>
        </p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={2} style={{paddingTop:'2em'}}>
      <Grid.Column width={7} style={{marginRight:'1em'}}>
        <Header as='h3'
                style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
          <div dangerouslySetInnerHTML={{__html:prices.faq[2].title}}></div>
        </Header>
        <p>
          <div dangerouslySetInnerHTML={{__html:prices.faq[2].content}}></div>
        </p>
      </Grid.Column>
      <Grid.Column width={7} style={{marginLeft:'1em'}}>
        <Header as='h3'
                style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
          <div dangerouslySetInnerHTML={{__html:prices.faq[3].title}}></div>
        </Header>
        <p>
          <div dangerouslySetInnerHTML={{__html:prices.faq[3].content}}></div>
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>

{/* Partie Projet spécifique */}
<Segment style={{padding: '3em 0em'}} vertical>
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
              <div dangerouslySetInnerHTML={{__html: prices.projetSpe.title}}></div>

          </Header>

          <p style={{
              fontSize: '1.2em',
              textAlign: 'justify',
              color: '#605E5E',
              marginTop: '3.6em',
              padding: '0em 5.2em',
              paddingBottom: '2em'
          }}>
              <div dangerouslySetInnerHTML={{__html: prices.projetSpe.content}}></div> 
          </p>
          <Link to={'contactez-nous'}>
            <Button className='boutonMLC' textAlign='center' primary size='big' style={{marginTop: '1em'}}>
                {prices.projetSpe.button}
            </Button>
          </Link>
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
              <div dangerouslySetInnerHTML={{__html: prices.projetSpe.title}}></div>

          </Header>

          <p style={{
              fontSize: '1.1em',
              textAlign: 'justify',
              color: '#605E5E',
              marginTop: '3.6em',
              padding: '0em 5.2em',
              paddingBottom: '2em'
          }}>
              <div dangerouslySetInnerHTML={{__html: prices.projetSpe.content}}></div> 
          </p>
          <Link to={'contactez-nous'}>
            <Button className='boutonMLC' textAlign='center' primary size='small' style={{marginTop: '1em'}}>
                {prices.projetSpe.button}
            </Button>
          </Link>
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

export default Prices;

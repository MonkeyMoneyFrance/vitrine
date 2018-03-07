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
    Dimmer,
    Loader,
    Transition,
    Rail,
    Sticky,
    Card,
    Item,
    Sidebar
} from 'semantic-ui-react';
import MenuContainer from '../components/menucontainer';
import TopMenu from '../components/topmenu';
import SidebarMenu from '../components/sidebar';
import headerhome from '../images/headerHome.png';
import numeriser from '../images/numeriser.png';
import parcoursutilisateur from '../images/parcoursutilisateur.png';
import Footer from '../components/footer';
import functions from '../config/functions';
import firebase from '../config/initfirebase';
import Fond from '../images/home/fond.png';
import banqueImage from '../images/home/index';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import ChatBot from './chatbot';



class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contextRef: {},
            sujet: ""
        };
        this.wasLoad = false;
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }


    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    handleContextRef = contextRef => this.setState({contextRef: {contextRef}});

    scrollTo(data) {
        this.setState({activeItem: data.name});
        functions.scrollTo(data.name, () => {

        })
    }



    CardClick(theme) {
        this.setState({sujet: theme});
    }

    renderFeature() {
        var features = this.props.website.features


        const {contextRef} = (this.state) ? this.state.contextRef : void 0;
        let feature = features.list;
        let featureSorted = Object.keys(feature).sort(function (a, b) {
            return feature[a].index - feature[b].index
        });

        let settings = {
            dots: true,
            speed: 500,
            slidesToShow: 2,
            arrows: true,
            nextArrow: <Button icon={"arrow right"} onClick={this.next}/>,
            prevArrow: <Button icon={"arrow left"} onClick={this.previous}/>,
        };

        return (
            <div ref={this.handleContextRef} style={{width: '100%'}}>
                <Segment textAlign='center' vertical>
                  <Grid textAlign='center'>
                    <Grid.Row columns={1}>
                      <Grid.Column only='computer' width={8}>
                        <Header as='h2' centered textAlign='center' style={{
                            marginTop: '1em',
                            marginBottom: '1em',
                            textAlign: 'center',
                            fontWeight: '200',
                            fontSize: '3em',
                            color: '#4F4F4F',
                        }}>
                          <div dangerouslySetInnerHTML={{__html: features.firstItem}}></div>
                        </Header>
                      </Grid.Column>
                      <Grid.Column only='mobile tablet' width={14}>
                        <Header as='h2' centered textAlign='center' style={{
                            marginTop: '1em',
                            marginBottom: '1em',
                            textAlign: 'center',
                            fontWeight: '200',
                            fontSize: '2em',
                            color: '#4F4F4F',
                        }}>
                          <div dangerouslySetInnerHTML={{__html: features.firstItem}}></div>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                    <Grid columns={1} centered={true} style={{marginBottom: '4em', marginTop: '2em'}}>
                        <Grid.Row>
                            <Grid.Column only='computer' width={14}>
                                <Slider responsive={[{breakpoint:450, settings:{slidesToShow:1}}]} ref={c => this.slider = c} {...settings}  >
                                    {featureSorted.map((object, index) => {
                                        return (
                                            <Card
                                                  style={{paddingBottom: '1em', paddingTop: '2em'}} fluid color={'teal'}
                                                  Width={2}
                                            >
                                                <Card.Content textAlign='center'>
                                                    <Header textAlign='center'
                                                            as='h2'
                                                            style={{marginBottom:'2em', color: '#4F4F4F', fontWeight:'bold', fontSize:'1.7em'}}>
                                                            <div dangerouslySetInnerHTML={{__html: feature[object].label}}></div>
                                                            </Header>
                                                    <Grid columns={2}>
                                                        <Grid.Row verticalAlign='middle' centered>
                                                            <Grid.Column width={6}>
                                                                <Image size='small' src={banqueImage[feature[object].image]}></Image>
                                                            </Grid.Column>
                                                            <Grid.Column width={8} textAlign='justified' style={{fontSize: '1.1em', color: '#605E5E', paddingLeft:'2em', paddingRight:'2em'}}>
                                                              <p textAlign='justified' dangerouslySetInnerHTML={{__html: feature[object].content}}></p>
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                    </Grid>

                                                </Card.Content>
                                                <Grid.Row textAlign='center' style={{paddingBottom:'0.5em'}}>
                                                  <Button animated='vertical' onClick={() => this.CardClick(object)}
                                                    >
                                                    <Button.Content textAlign='center' visible>Fonctionnalités</Button.Content>
                                                    <Button.Content hidden>
                                                      <Icon name='down arrow' />
                                                    </Button.Content>
                                                  </Button>
                                              </Grid.Row>
                                            </Card>
                                        )
                                    })
                                    }
                                </Slider>

                            </Grid.Column>
                            <Grid.Column only='mobile tablet' width={14}>
                                <Slider style={{minHeight:'490px'}} responsive={[{breakpoint:450, settings:{slidesToShow:1}}]} ref={c => this.slider = c} {...settings}  >
                                    {featureSorted.map((object, index) => {
                                        return (
                                            <Card
                                                  style={{paddingBottom: '1em', paddingTop: '2em'}} fluid color={'teal'}
                                                  Width={2}
                                            >
                                                <Card.Content textAlign='center'>
                                                  <Header textAlign='center'
                                                          as='h2'
                                                          style={{marginBottom:'1.5em', color: '#4F4F4F', fontWeight:'bold', fontSize:'1.5em'}}>
                                                          <div dangerouslySetInnerHTML={{__html: feature[object].label}}></div>
                                                  </Header>
                                                  <Image size='tiny' style={{marginBottom:'2em'}} src={banqueImage[feature[object].image]}></Image>
                                                  <p style={{textAlign:'left', fontSize: '1.1em', color: '#605E5E'}} dangerouslySetInnerHTML={{__html: feature[object].content}}></p>
                                                </Card.Content>
                                                <Grid.Row textAlign='center' style={{paddingBottom:'0.5em'}}>
                                                  <Button animated='vertical' size='small' onClick={() => this.CardClick(object)}>
                                                    <Button.Content textAlign='center' visible>Fonctionnalités</Button.Content>
                                                    <Button.Content hidden>
                                                      <Icon name='down arrow' />
                                                    </Button.Content>
                                                  </Button>
                                              </Grid.Row>
                                            </Card>
                                        )
                                    })
                                    }
                                </Slider>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Segment>

                {(this.state.sujet !== "") ? (

                    <div style={{
                        paddingTop : '3em',
                        paddingBottom :'5em',
                        paddingLeft : '2em',
                        paddingRight : '2em'
                    }}
                    >
                      <Grid>
                        <Grid.Row columns={1}>
                          <Grid.Column width={15} only='computer'>
                            <Header as='h3' style={{
                                paddingTop: '1em',
                                paddingBottom:'1.5em',
                                textAlign: 'center',
                                color:'#605E5E',
                                fontWeight:'bold',
                                fontSize:'1.5em'

                            }}>{feature[this.state.sujet].undertitle}
                            </Header>
                          </Grid.Column>
                          <Grid.Column width={15} only='mobile tablet'>
                            <Header as='h3' style={{
                                paddingTop: '1em',
                                paddingBottom:'1.2em',
                                textAlign: 'center',
                                color:'#605E5E',
                                fontWeight:'bold',
                                fontSize:'1.5em'

                            }}>{feature[this.state.sujet].undertitle}
                            </Header>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>

                        <Grid stackable style={{marginTop: "1em"}}>
                            <Grid.Row key={1} centered={true}>
                              <Grid.Column width={16} only='computer'>
                                <Card.Group itemsPerRow={4}>
                                  {Object.keys(feature[this.state.sujet]['items']).map((e, i) => {

                                      return (

                                              <Card style={{backgroundColor: "rgb(247, 249, 250)"}} >
                                                <Card.Content >
                                                  <Grid columns={2}>
                                                    <Grid.Row verticalAlign='middle'>
                                                      <Grid.Column width={12} textAlign='left' style={{fontWeight:'bold', fontSize:'1.3em' }}>
                                                        {feature[this.state.sujet]['items'][e].title}
                                                      </Grid.Column>
                                                      <Grid.Column  width={4}>
                                                        <Image  floated='right' size='mini' src={banqueImage[feature[this.state.sujet]['items'][e].img]}/>
                                                      </Grid.Column>
                                                    </Grid.Row>
                                                  </Grid>
                                                  <Card.Description style={{paddingTop:'1em', textAlign:'justify'}}>
                                                      <div
                                                          dangerouslySetInnerHTML={{__html: feature[this.state.sujet]['items'][e].label}}></div>
                                                  </Card.Description>
                                              </Card.Content>
                                            </Card>


                                      )
                                  })}
                                  </Card.Group>
                                </Grid.Column>
                                <Grid.Column width={16} only='tablet'>
                                  <Card.Group itemsPerRow={3}>
                                    {Object.keys(feature[this.state.sujet]['items']).map((e, i) => {

                                        return (

                                                <Card style={{backgroundColor: "rgb(247, 249, 250)"}} >
                                                  <Card.Content >
                                                    <Grid columns={2}>
                                                      <Grid.Row verticalAlign='middle'>
                                                        <Grid.Column width={12} textAlign='left' style={{fontWeight:'bold', fontSize:'1.3em' }}>
                                                          {feature[this.state.sujet]['items'][e].title}
                                                        </Grid.Column>
                                                        <Grid.Column  width={4}>
                                                          <Image  floated='right' size='mini' src={banqueImage[feature[this.state.sujet]['items'][e].img]}/>
                                                        </Grid.Column>
                                                      </Grid.Row>
                                                    </Grid>
                                                    <Card.Description style={{paddingTop:'1em', textAlign:'justify'}}>
                                                        <div
                                                            dangerouslySetInnerHTML={{__html: feature[this.state.sujet]['items'][e].label}}></div>
                                                    </Card.Description>
                                                </Card.Content>
                                              </Card>


                                        )
                                    })}
                                    </Card.Group>
                                  </Grid.Column>
                                  <Grid.Column width={16} only='mobile'>
                                    <Card.Group itemsPerRow={1}>
                                      {Object.keys(feature[this.state.sujet]['items']).map((e, i) => {

                                          return (

                                                  <Card style={{backgroundColor: "rgb(247, 249, 250)"}} >
                                                    <Card.Content >
                                                      <Grid columns={2}>
                                                        <Grid.Row verticalAlign='middle'>
                                                          <Grid.Column width={12} textAlign='left' style={{fontWeight:'bold', fontSize:'1.3em' }}>
                                                            {feature[this.state.sujet]['items'][e].title}
                                                          </Grid.Column>
                                                          <Grid.Column  width={4}>
                                                            <Image  floated='right' size='mini' src={banqueImage[feature[this.state.sujet]['items'][e].img]}/>
                                                          </Grid.Column>
                                                        </Grid.Row>
                                                      </Grid>
                                                      <Card.Description style={{paddingTop:'1em', textAlign:'justify'}}>
                                                          <div
                                                              dangerouslySetInnerHTML={{__html: feature[this.state.sujet]['items'][e].label}}></div>
                                                      </Card.Description>
                                                  </Card.Content>
                                                </Card>


                                          )
                                      })}
                                      </Card.Group>
                                    </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                ) : ""}


                {/*<Rail attached close='very' id='rail' position='left' style={{paddingTop: '3em'}}>
                    <Sticky context={contextRef} offset={150}>
                        <Menu pointing vertical style={{width: 'inherit', marginBottom: '3em'}}>
                            {featureSorted.map((object, index) => {
                                return (
                                    <Menu.Item name={object} key={index}
                                               active={this.state.activeItem === {object}}
                                               onClick={(e, data) => this.scrollTo(data)}>{feature[object].label}</Menu.Item>
                                )
                            })}
                        </Menu>
                    </Sticky>
                </Rail>*/}
            </div>
        )
    }

    render() {
      var features = this.props.website.features


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
                            <Grid centered stackable style={{margintTop: '5em'}} >
                                <Grid.Column width={10} only='computer'  verticalAlign='middle' centered textAlign='center' style={{marginTop: '1em', marginBottom: '2em'}}>
                                    <Header
                                        as='h2'
                                        content={features.mainTitle}
                                        inverted
                                        style={{
                                            fontSize: '3.5em',
                                            textAlign: 'center',
                                            fontWeight: '200',
                                            marginTop: '3em',
                                            color: 'white',
                                            lineHeight: '1.3em',
                                            letterSpacing: '-0.03em'
                                        }}
                                    />
                                    <Header  as='h2' content={features.underTitle} style={{fontSize: '1.7em', marginTop: '1em', textAlign: 'center', fontWeight: 'normal',
                                     color: 'white'}}
                                    />
                                    <Image size='tiny' centered src={banqueImage[features.imageTitle]} style={{marginTop:'13em'}}>
                                    </Image>
                                    <Header
                                        as='h2'
                                        content={features.underTitle2}
                                        style={{fontSize: '1.3em', fontWeight: 'normal', marginTop:'2em', textAlign: 'center',color: '#4F4F4F' }}
                                    />

                                </Grid.Column>
                                <Grid.Column width={16} only='mobile tablet'  verticalAlign='middle' centered textAlign='center' style={{marginTop: '1em', marginBottom: '2em'}}>
                                    <Header
                                        as='h2'
                                        content={features.mainTitle}
                                        inverted
                                        style={{
                                            fontSize: '2.5em',
                                            textAlign: 'center',
                                            fontWeight: '200',
                                            marginTop: '3em',
                                            color: 'white',
                                            lineHeight: '1.3em',
                                            letterSpacing: '-0.03em'
                                        }}
                                    />
                                    <Header  as='h2' content={features.underTitle} style={{fontSize: '1.3em', marginTop: '1em', textAlign: 'center', fontWeight: 'normal',
                                     color: 'white'}}
                                    />
                                    <Image size='tiny' centered src={banqueImage[features.imageTitle]} style={{marginTop:'11em'}}>
                                    </Image>
                                    <Header
                                        as='h2'
                                        content={features.underTitle2}
                                        style={{fontSize: '1em', fontWeight: 'normal', marginTop:'6em', textAlign: 'center',color: '#4F4F4F' }}
                                    />

                                </Grid.Column>
                            </Grid>
                        </Container>
                    </Segment>




                <Segment vertical style={{padding: 0}}>
                    {/*<Grid stackable columns={2}>*/}
                    {/*<Grid.Column only='computer' width={4}></Grid.Column>*/}
                    {/*<Grid.Column >*/}
                    {this.renderFeature()}
                    {/*</Grid.Column>*/}
                    {/*</Grid>*/}
                </Segment>



                {/* Partie "Adapté à tout projet d'économie circulaire" */}
                <Segment style={{padding: '3em 0em', backgroundColor: '#f7f9fa'}} vertical>
                    <Container style={{padding: '0em 0em'}} vertical textAlign='center'>
                      <Grid textAlign='center'>
                        <Grid.Row>
                          <Grid.Column only='computer' width={16} >
                            <Header as='h2' textAlign='center' style={{
                                margin: 'auto',
                                marginTop: '1em',
                                marginBottom: '1em',
                                fontWeight: '200',
                                fontSize: '3em',
                                color: '#4F4F4F',

                            }}
                            >
                                <div dangerouslySetInnerHTML={{__html: features.secondItem.title}}></div>

                            </Header>

                            <Image centered size='tiny' src={banqueImage[features.secondItem.image]}></Image>

                            <p style={{
                                fontSize: '1.2em',
                                textAlign: 'justify',
                                color: '#605E5E',
                                marginTop: '3.6em',
                                padding: '0em 5.2em',
                                paddingBottom: '2em'
                            }}>
                                <div dangerouslySetInnerHTML={{__html: features.secondItem.content}}></div>
                                 
                            </p>
                          </Grid.Column>
                          <Grid.Column only='mobile tablet' width={16} >
                            <Header as='h2' textAlign='center' style={{
                                margin: 'auto',
                                marginTop: '1em',
                                marginBottom: '1em',
                                fontWeight: '200',
                                fontSize: '2em',
                                color: '#4F4F4F',

                            }}
                            >
                                <div dangerouslySetInnerHTML={{__html: features.secondItem.title}}></div>

                            </Header>

                            <Image centered size='tiny' src={banqueImage[features.secondItem.image]}></Image>

                            <p style={{
                                fontSize: '1.1em',
                                textAlign: 'justify',
                                color: '#605E5E',
                                marginTop: '3.6em',
                                padding: '0em 1.2em',
                                paddingBottom: '2em'
                            }}>
                                <div dangerouslySetInnerHTML={{__html: features.secondItem.content}}></div>
                                 
                            </p>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Container>
                </Segment>


{/* Partie verte : Contactez-nous */}
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
                                    <div dangerouslySetInnerHTML={{__html: features.endPage.title}}></div>
                                </Header>

                                <Button className='MainButton' as='a' size='big' style={{marginTop: '1em'}}>
                                    {features.endPage.buttontitle}
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
                                    <div dangerouslySetInnerHTML={{__html: features.endPage.title2}}></div>
                                </Header>


                            </Grid.Column>
                            <Grid.Column only='mobile tablet' width={14} centered textAlign='center'>
                                <Header
                                    as='h2'
                                    style={{
                                        fontSize: '1.5em', textAlign: 'center', fontWeight: '200', color: 'white',
                                        letterSpacing: '-0.03em', lineHeight: '1.8em'
                                    }}
                                >
                                    <div dangerouslySetInnerHTML={{__html: features.endPage.title}}></div>
                                </Header>

                                <Button className='MainButton' as='a' size='small' style={{marginTop: '1em'}}>
                                    {features.endPage.buttontitle}
                                    <Icon name='right arrow'/>
                                </Button>

                                <Header
                                    as='h2'
                                    style={{
                                        fontSize: '1.1em',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginTop: '2em',
                                        color: 'white',
                                        lineHeight: '1.3em',
                                    }}
                                >
                                    <div dangerouslySetInnerHTML={{__html: features.endPage.title2}}></div>
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

export default Features;

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
    Transition
} from 'semantic-ui-react'
import MenuContainer from '../components/menucontainer'
import TopMenu from '../components/topmenu'
import headerhome from '../images/headerHome.png'
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import firebase from '../config/initfirebase'
import banqueImage from '../images/home/index'
import Fond from '../images/home/fond.png'
import ChatBot from './chatbot';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileItem: 'main',
            visible: true
        };
    }

    dosmth() {

    }

    componentWillMount() {

        var self = this
        firebase.database().ref('home').on('value', function (snapshot) {

            self.setState({
                items: snapshot.val()['items'],
                title: snapshot.val()['title'],
                underTitle: snapshot.val()['underTitle'],
                imageTitle: snapshot.val()['imageTitle'],
                buttonTitle: snapshot.val()['buttonTitle'],
                features: snapshot.val()['features'],
                featuresTitle: snapshot.val()['featuresTitle']
            })
        })
    }

    render() {
        if (!this.state.items) return null;

        console.log("fond", Fond);

        return (
            <div>

                <TopMenu path={this.props.match.path}/>

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
                    verticalAlign='middle'
                    vertical
                >
                    <Container>
                        <Grid centered style={{marginTop: '5em'}}>
                            <Grid.Column width={8} centered textAlign='center'>
                                <Header
                                    as='h2'
                                    content={this.state.title}
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
                                <Button className='MainButton' inverted as='a' size='big' style={{marginTop: '1em'}}>
                                    {this.state.buttonTitle}
                                    <Icon name='right arrow'/>
                                </Button>
                                <Header
                                    as='h2'
                                    content={this.state.underTitle}
                                    inverted
                                    style={{fontSize: '1.7em', fontWeight: 'normal', textAlign: 'center'}}
                                />
                            </Grid.Column>
                        </Grid>
                    </Container>
                </Segment>

                {/* Partie "Des outils réalisés pour vous" */}
                <Segment style={{padding: '3em 1em',}} vertical>
                    {/* <Container style ={{ textAlign:'center', marginTop:'1em', marginBottom:'1em'}}>
            <Header as='h2' style={{
              margin:'auto',
              marginTop:'1em',
              marginBottom:'1em',
              fontWeight:'200',
              fontSize: '3em',
              color:'#4F4F4F',
              maxWidth:'400px'}}>
              <div  dangerouslySetInnerHTML={{__html: this.state.featuresTitle}}></div>
            </Header>
          </Container> */}

                    <Grid stackable columns={'3'} className='propText'>
                        <Grid.Row style={{marginTop: '1em'}}>
                            <Grid.Column textAlign='center'>
                                <Image centered size='tiny' src={banqueImage[this.state.features[0].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.features[0].title}}></div>
                                </Header>
                                <p style={{padding: '0em 2em', paddingBottom: '0em'}}>
                                    {this.state.features[0].content}
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <Image centered size='tiny' src={banqueImage[this.state.features[1].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.features[1].title}}></div>
                                </Header>
                                <p style={{padding: '0em 2em', paddingBottom: '0em'}}>
                                    {this.state.features[1].content}
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <Image centered size='tiny' src={banqueImage[this.state.features[2].image]}></Image>
                                <Header as='h3' textAlign='center'
                                        style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.4em'}}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.features[2].title}}></div>
                                </Header>
                                <p style={{padding: '0em 2em', paddingBottom: '0em'}}>
                                    {this.state.features[2].content}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid stackable columns={'3'} className='propText'>
                        <Grid.Row style={{marginBottom: '2.5em'}}>
                            <Grid.Column textAlign='center'>
                                <Button className='boutonMLC2' size='large' textAlign='center'>
                                    {this.state.features[0].button}
                                    <Icon name='right arrow'/>
                                </Button>
                            </Grid.Column>

                            <Grid.Column textAlign='center'>
                                <Button className='boutonMLC2' size='large' textAlign='center'>
                                    {this.state.features[1].button}
                                    <Icon name='right arrow'/>
                                </Button>
                            </Grid.Column>

                            <Grid.Column textAlign='center'>
                                <Button className='boutonMLC2' size='large' textAlign='center'>
                                    {this.state.features[2].button}
                                    <Icon name='right arrow'/>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Segment>

                {/* Partie "Au service des monnaies locales" */}
                <Segment style={{padding: '3em 0em', backgroundColor: '#f7f9fa'}} vertical>
                    <Container style={{padding: '0em 0em'}} vertical textAlign='center'>
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
                            <div dangerouslySetInnerHTML={{__html: this.state.items[0].title}}></div>

                        </Header>


                        <p style={{
                            fontSize: '1.2em',
                            textAlign: 'justify',
                            color: '#605E5E',
                            marginTop: '3.6em',
                            padding: '0em 5.2em',
                            paddingBottom: '2em'
                        }}>
                            <div dangerouslySetInnerHTML={{__html: this.state.items[0].label}}></div>
                             
                        </p>
                        <Button className='boutonMLC' textAlign='center' primary size='big' style={{marginTop: '1em'}}>
                            {this.state.items[0].button}
                            <Icon name='right arrow'/>
                        </Button>
                    </Container>
                </Segment>


                {/* Segment => Module 1 : Gesiton de sa monnaie */}
                <Segment style={{minHeight: '500', padding: '3em 1em', color: "#4F4F4F"}} vertical>
                    <Header as='h2' textAlign='center' style={{
                        color: 'inherit',
                        marginTop: '1em',
                        marginBottom: '1em',
                        fontWeight: 'normal',
                        fontSize: '3em',
                        paddingLeft: '6em',
                        paddingRight: '6em'
                    }}>
                        <div dangerouslySetInnerHTML={{__html: this.state.items[1].title}}></div>
                    </Header>

                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row verticalAlign='middle' style={{paddingTop: '2em', marginBottom: '1em'}}>
                            <Grid.Column width={5} style={{padding: "1em 5em 0em 1em"}}>
                                <Header as='h3' textAlign='center'
                                        style={{color: '#4F4F4F', fontSize: '1.5em', paddingBottom: '1.5em'}}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.items[1].title1}}></div>
                                </Header>
                                <Segment compact floated='left' style={{border: 'none', backgroundColor: '#f7f9fa'}}>
                                    <Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[1].minititle1}}></div>
                                    </Header>
                                    <p style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[1].label1}
                                    </p>
                                </Segment>
                                <Segment compact floated='left' style={{border: 'none', backgroundColor: '#f7f9fa'}}>
                                    <Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[1].minititle2}}></div>
                                    </Header>
                                    <p style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[1].label2}
                                    </p>
                                </Segment>
                                <Segment compact floated='left' style={{border: 'none', backgroundColor: '#f7f9fa'}}>
                                    <Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[1].minititle3}}></div>
                                    </Header>
                                    <p style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[1].label3}
                                    </p>
                                </Segment>


                            </Grid.Column>
                            <Grid.Column width={11} style={{padding: "1em 2em"}}>
                                <Image centered size="massive" src={banqueImage[this.state.items[1].image]}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                {/* Segment => Module 2 : Communauté digitale */}
                <Segment style={{minHeight: '500', padding: '3em 1em', color: "#4F4F4F", backgroundColor: '#f7f9fa'}}
                         vertical>

                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row verticalAlign='middle' style={{paddingTop: '2em', marginBottom: '1em'}}>
                            <Grid.Column width={11} style={{padding: "1em 2em"}}>
                                <Image centered size="massive" src={banqueImage[this.state.items[2].img]}/>
                            </Grid.Column>

                            <Grid.Column width={5} style={{padding: "1em 1em 0em 5em"}}>
                                <Header as='h3' textAlign='center'
                                        style={{color: '#4F4F4F', fontSize: '1.5em', paddingBottom: '1.5em'}}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.items[2].title}}></div>
                                </Header>
                                <Segment compact floated='right' style={{border: 'none'}}>
                                    <Header as='h3' textAlign='right'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[2].minititle0}}></div>
                                    </Header>
                                    <p textAlign='right' style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[2].label0}
                                    </p>
                                </Segment>
                                <Segment compact floated='right' style={{border: 'none'}}>
                                    <Header as='h3' textAlign='right'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[2].minititle1}}></div>
                                    </Header>
                                    <p textAlign='right' style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[2].label1}
                                    </p>
                                </Segment>
                                <Segment compact floated='right' style={{border: 'none'}}>
                                    <Header as='h3' textAlign='right'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[2].minititle2}}></div>
                                    </Header>
                                    <p textAlign='right' style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[2].label2}
                                    </p>
                                </Segment>
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

                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row verticalAlign='middle' style={{paddingTop: '2em', marginBottom: '1em'}}>
                            <Grid.Column width={5} style={{padding: "1em 5em 0em 1em"}}>
                                <Header as='h3' textAlign='center'
                                        style={{color: '#4F4F4F', fontSize: '1.5em', paddingBottom: '1.5em'}}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.items[3].title}}></div>
                                </Header>
                                <Segment compact floated='left' style={{border: 'none', backgroundColor: '#f7f9fa'}}>
                                    <Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[3].minititle1}}></div>
                                    </Header>
                                    <p style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[3].label1}
                                    </p>
                                </Segment>
                                <Segment compact floated='left' style={{border: 'none', backgroundColor: '#f7f9fa'}}>
                                    <Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[3].minititle2}}></div>
                                    </Header>
                                    <p style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[3].label2}
                                    </p>
                                </Segment>
                                <Segment compact floated='left' style={{border: 'none', backgroundColor: '#f7f9fa'}}>
                                    <Header as='h3' textAlign='left'
                                            style={{fontweight: 'bold', color: '#4F4F4F', fontSize: '1.3em'}}>
                                        <div dangerouslySetInnerHTML={{__html: this.state.items[3].minititle3}}></div>
                                    </Header>
                                    <p style={{fontSize: '1.1em', lineHeight: '2'}}>
                                        {this.state.items[3].label3}
                                    </p>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={11} style={{padding: "1em 2em"}}>
                                <Image centered size="massive" src={banqueImage[this.state.items[3].image]}/>
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
                            <Grid.Column width={10} centered textAlign='center'>
                                <Header
                                    as='h2'
                                    style={{
                                        fontSize: '2.5em', textAlign: 'center', fontWeight: '200', color: 'white',
                                        letterSpacing: '-0.03em', lineHeight: '1.8em'
                                    }}
                                >
                                    <div dangerouslySetInnerHTML={{__html: this.state.items[4].title}}></div>
                                </Header>

                                <Button className='MainButton' as='a' size='big' style={{marginTop: '1em'}}>
                                    {this.state.items[4].buttontitle}
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
                                    <div dangerouslySetInnerHTML={{__html: this.state.items[4].title2}}></div>
                                </Header>


                            </Grid.Column>
                        </Grid>
                    </Container>
                </Segment>
                <ChatBot/>
                <Footer/>
            </div>
        )
    }
}

export default Home;

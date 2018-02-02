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
    Item
} from 'semantic-ui-react';
import MenuContainer from '../components/menucontainer';
import TopMenu from '../components/topmenu';
import headerhome from '../images/headerHome.png';
import numeriser from '../images/numeriser.png';
import parcoursutilisateur from '../images/parcoursutilisateur.png';
import Footer from '../components/footer';
import functions from '../config/functions';
import firebase from '../config/initfirebase';
import Fond from '../images/home/fond.png';

import Slider from 'react-slick';
import ChatBot from './chatbot';


class Features2 extends Component {
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

    componentWillMount() {
        let self = this;
        firebase.database().ref('features').on('value', function (snapshot) {

            self.setState({
                feature: snapshot.val()['list'],
                title: snapshot.val()['mainTitle'],
                undertitle: snapshot.val()['underTitle'],
                firstItem: snapshot.val()['firstItem']
            })
        })
    }

    CardClick(theme) {
        this.setState({sujet: theme});
    }

    renderFeature() {
        if (!this.state.feature) return;

        const {contextRef} = (this.state) ? this.state.contextRef : void 0;
        let feature = this.state.feature;
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
                <div>
                    <Header as='h1' style={{
                        marginTop: '1em',
                        marginBottom: '1em',
                        fontSize: '2em',
                        textAlign: 'center'
                    }}>
                        {this.state.firstItem}
                    </Header>
                    <Grid columns={1} centered={true} style={{marginBottom: '80px', marginTop: '100px'}}>
                        <Grid.Row>
                            <Grid.Column width={14}>
                                <Slider ref={c => this.slider = c} {...settings}  >
                                    {featureSorted.map((object, index) => {
                                        return (
                                            <Card onClick={() => this.CardClick(object)}
                                                  style={{padding: 5}} fluid color={'teal'}
                                            >
                                                <Card.Content>
                                                    <Header textAlign='center'
                                                            as='h2'>{feature[object].label}</Header>
                                                    <Grid columns={2}>
                                                        <Grid.Row>
                                                            <Grid.Column width={6}>
                                                                <img src="http://via.placeholder.com/200x200"/>
                                                            </Grid.Column>
                                                            <Grid.Column width={9} style={{color: 'black'}}>
                                                                <p>Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing
                                                                    elit, sed do eiusmod tempor incididunt ut labore
                                                                    et
                                                                    dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis
                                                                    nostrud exercitation ullamco laboris nisi ut
                                                                    aliquip
                                                                    ex ea commodo consequat. Duis aute irure dolor
                                                                    in
                                                                    reprehenderit in voluptate velit esse cillum
                                                                    dolore
                                                                    eu fugiat nulla pariatur. Excepteur sint
                                                                    occaecat
                                                                    cupidatat non proident, sunt in culpa qui
                                                                    officia
                                                                    deserunt mollit anim id est laborum</p>
                                                            </Grid.Column>
                                                        </Grid.Row>

                                                    </Grid>
                                                </Card.Content>
                                            </Card>
                                        )
                                    })
                                    }
                                </Slider>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>

                {(this.state.sujet !== "") ? (

                    <div style={{
                        backgroundColor: "rgb(247, 249, 250)",
                        padding: '50px 20px',
                    }}
                    >
                        <Header as='h3' style={{
                            paddingTop: '30px 20px',
                            textAlign: 'center'
                        }}>{feature[this.state.sujet].undertitle}</Header>
                        <Grid style={{marginTop: "1em"}}>
                            <Grid.Row key={1} centered={true}>
                                {Object.keys(feature[this.state.sujet]['items']).map((e, i) => {

                                    return (
                                        <Grid.Column width={Math.round(16 / feature[this.state.sujet]['items'].length)}
                                                     textAlign={'justified'}>
                                            <Card>
                                                <Image src={"http://via.placeholder.com/350x150"}/>
                                                <Card.Content>
                                                    <Card.Description>
                                                        <div
                                                            dangerouslySetInnerHTML={{__html: feature[this.state.sujet]['items'][e].label}}></div>
                                                    </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                    )
                                })}
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

        if (!this.state.feature) {
            return (
                <Dimmer><Loader/></Dimmer>
            )
        }

        return (
            <div>
                <TopMenu visible={this.state.visible} path={this.props.match.path}/>
                <Visibility
                    onBottomPassed={() => {
                        this.setState({visible: true})
                    }}
                    onBottomVisible={() => {
                        this.setState({visible: false})
                    }}
                    once={false}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{
                            minHeight: 350,
                            padding: '1em 0em',
                            background: `url(${Fond}) no-repeat`,
                            backgroundSize: 'cover'
                        }}
                        verticalAlign='middle'
                        vertical
                    >
                        <MenuContainer/>
                        <Container>
                            <Grid stackable columns={1}>
                                <Grid.Column verticalAlign='middle' style={{marginTop: '1em', marginBottom: '2em'}}>
                                    <Header
                                        as='h1'
                                        content={this.state.title}
                                        inverted
                                        style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1em'}}
                                    />
                                    <p style={{fontSize: '1.4em', marginTop: '1em', textAlign: 'justify'}}>
                                        {this.state.undertitle}
                                         
                                    </p>
                                </Grid.Column>
                            </Grid>
                        </Container>
                    </Segment>
                </Visibility>

                <Segment vertical style={{padding: 0}}>
                    {/*<Grid stackable columns={2}>*/}
                    {/*<Grid.Column only='computer' width={4}></Grid.Column>*/}
                    {/*<Grid.Column >*/}
                    {this.renderFeature()}
                    {/*</Grid.Column>*/}
                    {/*</Grid>*/}
                </Segment>
                <Segment
                    style={{backgroundColor: 'rgb(94, 196, 169)', margin: 0, borderRadius: 0, padding: '50px 20px'}}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                </Segment>
                <ChatBot/>
                <Footer/>
            </div>
        )
    }
}

export default Features2;

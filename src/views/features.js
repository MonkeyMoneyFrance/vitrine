import React, {Component} from 'react';
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Dimmer,Loader,Transition,Rail,Sticky} from 'semantic-ui-react'
import MenuContainer from '../components/menucontainer'
import TopMenu from '../components/topmenu'
import headerhome from '../images/headerHome.png'
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import functions from '../config/functions'
import firebase from '../config/initfirebase'
import Fond from '../images/home/fond.png'

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {contextRef: {}};
        this.wasLoad = false
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

    renderFeature() {
        if (!this.state.feature) return;

        const {contextRef} = (this.state) ? this.state.contextRef : void 0;
        let feature = this.state.feature;
        let featureSorted = Object.keys(feature).sort(function (a, b) {
            return feature[a].index - feature[b].index
        });

        console.log(this.state.feature);
        return (
            <div ref={this.handleContextRef} style={{width: '100%'}}>
                <Segment style={{padding: '5em 1em'}} vertical>
                    <Header as='h1' style={{
                        marginTop: '1em',
                        marginBottom: '1em',
                        fontSize: '2em',
                        textAlign: 'center'
                    }}>{this.state.firstItem}</Header>

                    <Grid container verticalAlign='top'>
                        {featureSorted.map((object, index) => {
                            return (
                                <div>
                                    <Divider/>
                                    <Grid.Row id={object} key={index}>
                                        <Grid.Column style={{padding: "1em 3em", minWidth: "75%"}}>
                                            <Header textAlign='center' as='h2'>{feature[object].label}</Header>
                                            <Header textAlign='center' as='h3'>{feature[object].undertitle}.</Header>
                                            <Grid style={{marginTop: "1em"}}>
                                                {Object.keys(feature[object]['items']).map((e, i) => {
                                                    return (
                                                        <Grid.Row key={i}>
                                                            <Grid.Column>
                                                                <Image src={feature[object]['items'][e].img} size='tiny'
                                                                       floated='left'/>
                                                                <p style={{fontSize: '1.4em', padding: '1em 2em'}}>
                                                                    {feature[object]['items'][e].label}
                                                                </p>
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                    )
                                                })}
                                            </Grid>
                                        </Grid.Column>
                                    </Grid.Row>
                                </div>
                            )
                        })
                        }
                    </Grid>
                </Segment>
                <Rail attached close='very' id='rail' position='left' style={{paddingTop: '3em'}}>
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
                </Rail>
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
                        style={{minHeight: 350, padding: '1em 0em', background: `url(${Fond}) no-repeat`, backgroundSize: 'cover' }}
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
                    <Grid stackable columns={2}>
                        <Grid.Column only='computer' width={4}></Grid.Column>
                        <Grid.Column width={12}>
                            {this.renderFeature()}
                        </Grid.Column>
                    </Grid>
                </Segment>


                <Footer/>
            </div>
        )
    }
}

export default Features;

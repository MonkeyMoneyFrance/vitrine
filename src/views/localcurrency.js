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
import speculation from '../images/localcurrency/speculation.png'
import local from '../images/localcurrency/local.png'
import group from '../images/localcurrency/group.png'
import chart from '../images/localcurrency/chart.png'
import responsabiliser from '../images/localcurrency/responsabiliser.png'
import environnement from '../images/localcurrency/environnement.png'
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import ChatBot from './chatbot';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {profileItem: 'main'};
    }

    render() {
        return (
            <div>
                <TopMenu visible={this.state.visible}/>
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
                        style={{minHeight: 350, padding: '1em 0em', backgroundColor: '#58caf1'}}
                        verticalAlign='middle'
                        vertical
                    >
                        <MenuContainer/>
                        <Container>
                            <Grid stackable columns={1}>
                                <Grid.Column verticalAlign='middle' style={{marginTop: '1em', marginBottom: '2em'}}>
                                    <Header
                                        as='h1'
                                        content='Se Réapproprier la Monnaie' inverted
                                        style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1em'}}
                                    />
                                    <p style={{fontSize: '1.4em', marginTop: '1em', textAlign: 'justify'}}>
                                        Dans un système financier et monétaire capitaliste, non-éthique et
                                        non-responsable, générateur des grandes crises
                                        économiques connues depuis ces dernières décennies et orienté vers le profit à
                                        court terme plutôt que le bien-être
                                        à long terme, se développent des Monnaies Locales Complémentaires, apportant une
                                        réponse aux enjeux d’aujourd’hui
                                        : climat, économie, société.
                                    </p>
                                </Grid.Column>
                            </Grid>
                        </Container>
                    </Segment>
                </Visibility>


                <Segment style={{padding: '5em 1em'}} vertical>
                    <Header as='h2' textAlign='center'
                            style={{marginTop: '1em', marginBottom: '1em', fontWeight: 'normal', fontSize: '2em'}}>
                        Une Monnaie Locale Complémentaire, c'est quoi ?
                    </Header>
                    <Grid container verticalAlign='top'>
                        <Grid.Row columns={4} textAlign='center'>
                            <Grid.Column width={4} style={{padding: "1em 1em"}}>
                                <Image centered src={group} size='small'/>
                                <p style={{fontSize: '1em'}}>
                                    Gérée par un groupe de citoyens
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4} style={{padding: "1em 1em"}}>
                                <Image centered src={chart} size='small'/>
                                <p style={{fontSize: '1em'}}>
                                    Régie par une charte de qualité
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4} style={{padding: "1em 1em"}}>
                                <Image centered src={speculation} size='small'/>
                                <p style={{fontSize: '1em'}}>
                                    Pas épargnable et pas spéculative
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4} style={{padding: "1em 1em"}}>
                                <Image centered src={local} size='small'/>
                                <p style={{fontSize: '1em'}}>
                                    Territoriale et ainsi locale
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{padding: '5em 1em', backgroundColor: '#5EC4A9', color: "white"}} vertical>
                    <Header as='h2' textAlign='center' style={{
                        color: 'inherit',
                        marginTop: '1em',
                        marginBottom: '1em',
                        fontWeight: 'normal',
                        fontSize: '2em'
                    }}>A quoi sert une Monnaie Locale Complémentaire</Header>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={16} style={{padding: "1em 3em"}}>
                                <p style={{fontSize: '1.4em'}}>
                                    <i>« Le changement climatique, le chômage et le vieillissement de la population ne
                                        peuvent être résolus avec
                                        le système monétaire en place. C’est au centre de notre tabou monétaire que nous
                                        trouverons, ou non, les forces
                                        indispensables au changement de paradigme » </i></p>
                                <p>Bernard Lietaer</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{padding: '3em 1em'}} vertical>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' textAlign='left' style={{
                                    marginTop: '1em',
                                    marginBottom: '1em',
                                    fontWeight: 'normal',
                                    fontSize: '1.6em',
                                }}>Générer un dynamisme local</Header>
                                <p style={{fontSize: '1.2em'}}>
                                    La Monnaie Locale est valable sur le territoire qui la délimite. Elle permet de
                                    favoriser l’économie territoriale
                                    dans laquelle elle évolue et ainsi privilégier ses acteurs locaux. De par son côté
                                    non-spéculatif et non-épargnable,
                                    les monnaies locales sont prouvées pour circuler plus rapidement générant ainsi plus
                                    de chiffre d’affaire sur son territoire 
                                </p>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle' width={8}>
                                <Image centered src={parcoursutilisateur} size='small'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                <Segment style={{padding: '3em 1em'}} vertical>

                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={8} verticalAlign='middle' style={{padding: "1em 2em"}}>
                                <Image centered src={environnement} size='small'/>
                            </Grid.Column>
                            <Grid.Column width={8} style={{padding: "1em 2em"}}>
                                <Header as='h3' textAlign='left' style={{
                                    marginTop: '1em',
                                    marginBottom: '1em',
                                    fontWeight: 'normal',
                                    fontSize: '1.6em',
                                }}>Protéger l’environnement</Header>
                                <p style={{fontSize: '1.2em'}}>
                                    Parce qu’elles favorisent les services et biens produits localement, elles sont
                                    génératrices de circuits-courts.
                                    En outre, les chartes d’utilisation des Monnaies Locales encouragent les bonnes
                                    pratiques environnementales.
                                    Certaines se mettent au service de la transition écologique et énergétiques.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{padding: '3em 1em'}} vertical>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' textAlign='left' style={{
                                    marginTop: '1em',
                                    marginBottom: '1em',
                                    fontWeight: 'normal',
                                    fontSize: '1.6em',
                                }}>Responsabiliser la communauté</Header>
                                <p style={{fontSize: '1.2em'}}>
                                    Consommer en monnaie locale, c’est donner du pouvoir à son acte d’achat.
                                    En outre, lorsque consomme en MLC, on investit dans des projets communautaires à
                                    vocation sociale ou environnementale.
                                </p>
                                <p style={{fontSize: '1.2em'}}>
                                    Changer le monde n’a jamais été aussi facile !
                                </p>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle' width={8}>
                                <Image centered src={responsabiliser} size='small'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <ChatBot/>
                <Footer/>
            </div>
        )
    }
}

export default Home;

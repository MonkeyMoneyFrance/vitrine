import React, { Component } from 'react';
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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {profileItem:'main'};
  }

  render(){
    return (
      <div>
        <TopMenu visible={this.state.visible}/>
        <Visibility
          onBottomPassed={() => {this.setState({ visible: true })}}
          onBottomVisible={() => {this.setState({ visible: false })}}
          once={false}
        >
        <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 200, padding: '1em 0em',backgroundColor:'#58caf1'}}
              verticalAlign='middle'
              vertical
            >
              <MenuContainer />
              <Container>
                <Grid  stackable columns={2} >
                  <Grid.Column verticalAlign='middle' style={{ marginTop:'1em',marginBottom:'2em' }}>
                    <Header
                      as='h1'
                      content='La solution pour numériser votre Monnaie Locale Complémentaire de façon durable, sécurisée et responsable'                      inverted
                      style={{ fontSize: '2.4em', fontWeight: 'normal',marginTop:'1em' }}
                    />
                    <Header
                      as='h2'
                      content='Une entreprise solidaire au service du solidaire'
                      inverted
                      style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                    />
                    <Button primary size='huge' style={{marginTop:'1em'}}>
                      Contactez nous
                      <Icon name='right arrow' />
                    </Button>
                  </Grid.Column>
                  <Grid.Column  verticalAlign='bottom' textAlign='center' >
                    <Transition transitionOnMount animation='fly left' duration={2400}>
                      <Image src={headerhome} centered  verticalAlign='bottom' style={{ height:'300px',marginBottom:'-70px' }} />
                    </Transition>
                  </Grid.Column>
                </Grid>
              </Container>
            </Segment>
        </Visibility>

        <Segment style={{ padding: '5em 0em' }} vertical>
          <Container style={{ padding: '1em 1em' }} vertical>
            <Header as='h2'
              textAlign='center'
              style={{marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '2em','textTransform':'uppercase' }}>
              Au service des Monnaies Locales
            </Header>
            <p style={{ fontSize: '1.2em',textAlign:'justify' }}>
              Les outils MKM sont conçus avec et pour les Monnaies Locales
              Complémentaires. Notre objectif, faire en sorte que ces Monnaies soient plus développées,
              plus utilisées et donc plus impactantes. Si vous ne connaissez pas encore les Monnaies Locales,
              aller faire un tour ici.
             </p>
          </Container>
        </Segment>

        <Segment  style={{ padding: '5em 1em' ,backgroundColor:'#5EC4A9',color:"white"}} vertical>
          <Header as='h2' textAlign='center' style={{color:'inherit',marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '2em','textTransform':'uppercase' }}>Vous êtes une association de Monnaie Locale Complémentaire</Header>
            <Grid container stackable verticalAlign='top'>
              <Grid.Row >
                <Grid.Column width={8} style={{padding:"1em 3em"}}>
                  <p style={{ fontSize: '1.4em' }}>
                    « Monkey Money vous propose un outil complet pour faciliter la gestion de votre monnaie, tout en passant au numérique sereinement. »
                  </p>
                </Grid.Column>
                <Grid.Column  width={8} style={{padding:"1em 3em"}}>
                  <p style={{ fontSize: '1.4em' }}>
                    « Les outils Monkey Money sont conçus pour faciliter l’utilisation de la Monnaie Locale pour l’adhérent mais également pour faciliter la gestion de la Monnaie par l’association. »
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>



          <Segment  style={{ padding: '3em 1em'}} vertical>
              <Grid container stackable verticalAlign='top'>
                <Grid.Row >
                  <Grid.Column  width={8}>
                    <Header as='h3' textAlign='left' style={{marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '1.6em', }}>Un Parcours utilisateur fluide</Header>
                    <p style={{ fontSize: '1.2em' }}>
                      Grâce aux outils MKM, utiliser sa monnaie locale, qu’elle soit au format papier ou numérique, n’a jamais été aussi facile.
                    </p>
                    <p style={{ fontSize: '1.2em' }}>
                      Chaque utilisateur dispose d’un compte utilisateur lui permettant de gérer ses informations, afficher son activité s’il est commerçant, trouver les produits en vente s’il particulier…
                      </p>
                  </Grid.Column>
                  <Grid.Column verticalAlign='middle' width={8}>
                    <Image centered src={parcoursutilisateur} size='small' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>


            <Segment  style={{ padding: '3em 1em'}} vertical>

                <Grid container stackable verticalAlign='top'>
                  <Grid.Row >
                    <Grid.Column  width={8} verticalAlign='middle' style={{padding:"1em 2em"}}>
                      <Image centered src={numeriser} size='small' />
                    </Grid.Column>
                    <Grid.Column width={8} style={{padding:"1em 2em"}}>
                      <Header as='h3' textAlign='left' style={{marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '1.6em', }}>Numériser sa monnaie</Header>

                      <p style={{ fontSize: '1.2em' }}>
                        Le 3ème module Monkey Money permet de faire passer sa monnaie au numérique, de façon sécurisé et durable.
                       </p>
                      <p style={{ fontSize: '1.2em' }}>
                        Le module Monkey Money fonctionne avec une blockchain, permettant ainsi un système totalement transparent.
                    </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>

              <Footer />
      </div>
    )
  }
}
export default Home;

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
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
  Table
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
class Prices extends Component {
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
              style={{ minHeight: 350, padding: '1em 0em',backgroundColor:'#58caf1'}}
              verticalAlign='middle'
              vertical
            >
              <MenuContainer />
              <Container>
                <Grid  stackable columns={1} >
                  <Grid.Row>
                    <Grid.Column textAlign='center' verticalAlign='middle' style={{ marginTop:'1em',marginBottom:'2em' }}>
                      <Header
                        as='h1'
                        content='Une offre réfléchie pour ne pas brider les finances de votre association'
                        inverted
                        style={{ fontSize: '1.7em', fontWeight: 'normal',marginTop:'1em' }}
                      />
                      <p style={{ fontSize: '1.4em',marginTop:'1em'}}>

                        Chez Monkey Money, c’est parce qu’on croit aux MLC qu’on veut tout faire
                        pour les aider à se développer. Nous avons créé des offres adaptées au moindre coût 
                      </p>
                    </Grid.Column>
                  </Grid.Row>


                                <Grid.Row columns={4} textAlign='center' verticalAlign='middle' style={{ marginTop:'1em',marginBottom:'2em' }}>

                                  <Grid.Column  width={4} style={{padding:"1em 1em"}}>
                                    <Image centered src={group} size='small'/>
                                    <p style={{ fontSize: '1em' }}>
                                      Pas de frais de mise en place

                                    </p>
                                  </Grid.Column>
                                  <Grid.Column width={4} style={{padding:"1em 1em"}}>
                                    <Image centered src={chart} size='small'/>
                                    <p style={{ fontSize: '1em' }}>
                                      Maintenance Incluse

                                    </p>
                                  </Grid.Column>
                                  <Grid.Column width={4} style={{padding:"1em 1em"}}>
                                    <Image centered src={speculation} size='small'/>
                                    <p style={{ fontSize: '1em' }}>
                                      Mise à jour régulière
                                    </p>
                                  </Grid.Column>
                                  <Grid.Column width={4} style={{padding:"1em 1em"}}>
                                    <Image centered src={local} size='small'/>
                                    <p style={{ fontSize: '1em' }}>
                                      Outils Libres
                                    </p>
                                  </Grid.Column>
                                </Grid.Row>
                </Grid>
              </Container>
            </Segment>
        </Visibility>





          <Segment  style={{ padding: '5em 2em' }} vertical>
            <Grid  textAlign='center' >
              <Header
                as='h1'
                content='Nos Offres'
                style={{ fontSize: '2em', fontWeight: 'normal',marginBottom:'1em' }}
              />
              <Grid.Row>

                <Grid.Column>

                  <Table unstackable definition celled columns={4} textAlign='center'>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell><Image src={numeriser} centered size='tiny'/></Table.HeaderCell>
                        <Table.HeaderCell><Image src={numeriser} centered size='tiny'/></Table.HeaderCell>
                        <Table.HeaderCell><Image src={numeriser} centered size='tiny'/></Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Offre 1 : Aide à la Gestion</Table.HeaderCell>
                        <Table.HeaderCell>Offre 2 : Espace Web Complet</Table.HeaderCell>
                        <Table.HeaderCell>Offre 3 : 100% Numérique</Table.HeaderCell>
                      </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row >
                          <Table.Cell textAlign='right'>Gestion des membres</Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                        </Table.Row>
                        <Table.Row >

                          <Table.Cell textAlign='right'>Gestion des adhésions</Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                        </Table.Row>
                        <Table.Row >
                          <Table.Cell textAlign='right'>Gestion des comptoirs</Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                        </Table.Row>
                        <Table.Row >

                          <Table.Cell textAlign='right'>Communication</Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                        </Table.Row>
                        <Table.Row >
                          <Table.Cell textAlign='right'>Cartographie</Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell> <Icon color='green' name='checkmark' size='large' /></Table.Cell>
                          <Table.Cell> <Icon color='green' name='checkmark' size='large' /></Table.Cell>
                        </Table.Row>
                        <Table.Row >
                          <Table.Cell textAlign='right'>Espaces personnels pour particuliers et professionels</Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell> <Icon color='green' name='checkmark' size='large' /></Table.Cell>
                          <Table.Cell> <Icon color='green' name='checkmark' size='large' /></Table.Cell>
                        </Table.Row>
                        <Table.Row >
                          <Table.Cell textAlign='right'>Comptes en Monnaie Electronique</Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                        </Table.Row>
                        <Table.Row >
                          <Table.Cell textAlign='right'>Echange en Monnaie Electronique</Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /> </Table.Cell>
                        </Table.Row>
                        <Table.Row >
                          <Table.Cell textAlign='right'>Métriques</Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell> </Table.Cell>
                          <Table.Cell> <Icon color='green' name='checkmark' size='large' /></Table.Cell>
                        </Table.Row>
                        <Table.Row >
                          <Table.Cell textAlign='right' verticalAlign='top'>
                            MAJ<br/>
                            Maintenance<br/>
                            Serveurs<br/>
                            Assistance technique
                          </Table.Cell>
                          <Table.Cell><Icon color='green' name='checkmark' size='large' /></Table.Cell>
                          <Table.Cell> <Icon color='green' name='checkmark' size='large' /></Table.Cell>
                          <Table.Cell> <Icon color='green' name='checkmark' size='large' /></Table.Cell>
                        </Table.Row>
                      </Table.Body>

                      <Table.Footer>
                        <Table.Row>
                          <Table.HeaderCell />
                          <Table.HeaderCell>100€</Table.HeaderCell>
                          <Table.HeaderCell>100€</Table.HeaderCell>
                          <Table.HeaderCell>100€</Table.HeaderCell>
                        </Table.Row>
                      </Table.Footer>

                  </Table>
                </Grid.Column>
              </Grid.Row>

            </Grid>

            </Segment>





              <Footer />
      </div>
    )
  }
}
export default Prices;

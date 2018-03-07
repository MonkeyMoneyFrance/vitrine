import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
  Dropdown,
  TextArea,
} from 'semantic-ui-react'

  export default  class Footer extends Component {
    render(){
      return(
        <Segment inverted vertical style={{ padding: '5em 0em', paddingBottom:'2em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      <List.Item>
                        <Link to={'monnaielocale'}>
                          <div className='linkFooter'>Monnaies Locales</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'fonctionnalites'}>
                          <div className='linkFooter'>Fonctionnalités</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'offres'}>
                          <div className='linkFooter'>Offres</div>
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Société' />
                    <List link inverted>
                      <List.Item>
                        <Link to={'monkeymoney'}>
                          <div className='linkFooter'>Monkey Money</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'monkeymoney'}>
                          <div className='linkFooter'>Rejoignez-nous</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'/'}>
                          <div className='linkFooter'>Accueil</div>
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as='h4' inverted>Réseaux Sociaux</Header>
                    <Link to={'https://www.facebook.com/MonkeyMoneyFrance/'}><Icon className='linkIcon' size='large' name='facebook f' link></Icon></Link>
                    <Link to={'https://twitter.com/_MonkeyMoney_'}><Icon className='linkIcon' size='large' name='twitter' link></Icon></Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
                <p style={{
                  fontSize:'1em',
                  fontWeight: '200',
                  color:'white',
                  marginTop:'5em',
                  textAlign:'center'
                }} >Monkey Money © 2018</p>
            </Container>
          </Segment>
        )
      }
  }

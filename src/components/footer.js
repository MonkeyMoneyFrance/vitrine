import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from 'semantic-ui-react'
import genericFb from '../functions/genericFb'

  export default  class Footer extends Component {
    render(){
      return(
        <Segment inverted vertical style={{ padding: '5em 0em', paddingBottom:'2em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content={genericFb.replaceString('%services')} />
                    <List link inverted>
                      <List.Item>
                        <Link to={'monnaielocale'}>
                          <div className='linkFooter'>{genericFb.replaceString('%localCurrencies')}</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'fonctionnalites'}>
                          <div className='linkFooter'>{genericFb.replaceString('%features')}</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'offres'}>
                          <div className='linkFooter'>{genericFb.replaceString('%offers')}</div>
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content={genericFb.replaceString('%company')} />
                    <List link inverted>
                      <List.Item>
                        <Link to={'legalnotice'}>
                          <div className='linkFooter'>{genericFb.replaceString('%legalNotice')}</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'monkeymoney'}>
                          <div className='linkFooter'>{genericFb.replaceString('%joinUs')}</div>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link to={'/'}>
                          <div className='linkFooter'>{genericFb.replaceString('%home')}</div>
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as='h4' inverted>{genericFb.replaceString('%socialNetworks')}</Header>
                    <a href='https://www.facebook.com/MonkeyMoneyFrance/' target="_blank" rel="noopener noreferrer"><Icon className='linkIcon' size='large' name='facebook f' link></Icon></a>
                    <a href='https://twitter.com/_MonkeyMoney_' target="_blank" rel="noopener noreferrer"><Icon className='linkIcon' size='large' name='twitter' link></Icon></a>
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

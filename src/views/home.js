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
  Transition
} from 'semantic-ui-react'
import MenuContainer from '../components/menucontainer'
import TopMenu from '../components/topmenu'
import headerhome from '../images/headerHome.png'
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import firebase from '../config/initfirebase'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {profileItem:'main'};
  }
  componentWillMount() {

    var self = this
    firebase.database().ref('home').on('value', function(snapshot){

      self.setState({
        items : snapshot.val()['items'],
        title : snapshot.val()['title'],
        underTitle : snapshot.val()['underTitle'],
        imageTitle: snapshot.val()['imageTitle'],
        buttonTitle: snapshot.val()['buttonTitle']
    })
    })
  }
  render(){
    if (!this.state.items) return null;
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
                      content={this.state.title}
                      inverted
                      style={{ fontSize: '2.4em', fontWeight: 'normal',marginTop:'1em' }}
                    />
                    <Header
                      as='h2'
                      content={this.state.underTitle}
                      inverted
                      style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                    />
                    <Button primary size='huge' style={{marginTop:'1em'}}>
                      {this.state.buttonTitle}
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
              {this.state.items[0].title}
            </Header>
            <p style={{ fontSize: '1.2em',textAlign:'justify' }}>
              {this.state.items[0].label}
             </p>
          <Button textAlign='center' primary size='huge' style={{marginTop:'1em'}}>
            {this.state.items[0].button}
            <Icon name='right arrow' />
          </Button>
          </Container>
        </Segment>

        <Segment  style={{ padding: '5em 1em' ,backgroundColor:'#5EC4A9',color:"white"}} vertical>
          <Header as='h2' textAlign='center' style={{color:'inherit',marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '2em','textTransform':'uppercase' }}>{this.state.items[1].title}</Header>
            <Grid container stackable verticalAlign='top'>
              <Grid.Row >
                <Grid.Column width={8} style={{padding:"1em 3em"}}>
                  <p style={{ fontSize: '1.4em' }}>
                    {this.state.items[1].label1}
                  </p>
                </Grid.Column>
                <Grid.Column  width={8} style={{padding:"1em 3em"}}>
                  <p style={{ fontSize: '1.4em' }}>
                    {this.state.items[1].label2}
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>



          <Segment  style={{ padding: '3em 1em'}} vertical>
              <Grid container stackable verticalAlign='top'>
                <Grid.Row >
                  <Grid.Column  width={8}>
                    <Header as='h3' textAlign='left' style={{marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '1.6em', }}>{this.state.items[2].title}</Header>
                    <p style={{ fontSize: '1.2em' }}>
                      {this.state.items[2].label1}
                    </p>
                    <p style={{ fontSize: '1.2em' }}>
                      {this.state.items[2].label2}
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
                      <Header as='h3' textAlign='left' style={{marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '1.6em', }}>{this.state.items[3].title}</Header>

                      <p style={{ fontSize: '1.2em' }}>
                        {this.state.items[3].label1}
                       </p>
                      <p style={{ fontSize: '1.2em' }}>
                        {this.state.items[3].label2}
                    </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>

              <Segment  style={{ padding: '3em 1em'}} vertical>

                  <Grid container stackable verticalAlign='top'>
                    <Grid.Row >

                      <Grid.Column width={8} style={{padding:"1em 2em"}}>
                        <Header as='h3' textAlign='left' style={{marginTop:'1em',marginBottom:'1em',fontWeight:'normal', fontSize: '1.6em', }}>{this.state.items[4].title}</Header>

                        <p style={{ fontSize: '1.2em' }}>
                          {this.state.items[4].label1}
                         </p>
                        <p style={{ fontSize: '1.2em' }}>
                          {this.state.items[4].label2}
                      </p>
                      </Grid.Column>
                      <Grid.Column  width={8} verticalAlign='middle' style={{padding:"1em 2em"}}>
                        <Image centered src={numeriser} size='small' />
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

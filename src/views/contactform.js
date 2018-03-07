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
    Transition,
    Form,
    Message,
    Sidebar

} from 'semantic-ui-react'
import firebase from '../config/initfirebase'
import TopMenu from '../components/topmenu'
import SidebarMenu from '../components/sidebar';
import swal from 'sweetalert'
import '../contact.css'


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {errors:{},message:{},error:null,loading:false};
        this.handleBlur = this.handleBlur.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDropdown = this.handleDropdown.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }



    handleSubmit(){
      var self = this
      if (this.state.error != '' && this.state.error != null) return

      this.setState({loading:true})
      var message = this.state.message
      if  (
        !message.contactName ||
        !message.type ||
        !message.detail ||
        !message.email ||
        !message.phone ||
        !message.detail ||
        !message.text
      ) {
        this.setState({error:'Vous devez remplir tous les champs',loading:false})
      } else {

        var xhttp = new XMLHttpRequest();


        xhttp.open("POST", 'https://us-central1-site-vitrine-c87e8.cloudfunctions.net/'+ "MessagePeople" , true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("message="+(JSON.stringify(message)));
        xhttp.onreadystatechange = function() {
          if (this.readyState===4) {
            var data = JSON.parse(this.responseText)

            if (data.response == true) {
              swal('Message Envoyé!')
              for (var i in message) {
                message[i] = ""
                document.getElementById(i).value = ''
              }

              self.setState({message})
              self.setState({loading:false})
            } else {
              swal("Erreur à l'envoi : " + data.response)
            }

          }
        }

        // send to Post
      }

    }

    handleChange(e,data){ // remove error when is typing
      var message  = this.state.message
      var errors = this.state.errors
      errors[e.target.id] = {error:false,errorMsg:null}
      this.setState({message})
      this.setState({errors})
    }

    handleDropdown(e,data){ // check dropdown error
      var message  = this.state.message
      var errors = this.state.errors
      var error = this.state.error
      var error = null

      if (!data.value || data.value == '') { // le champ est vide
        errors[data.id] = {error:true,errorMsg:'Vous devez remplir tous les champs'}
        message[data.id]=null
      } else {
        errors[data.id] = {error:false,errorMsg:null}
        message[data.id]=data.value
      }

      this.setState({message})
      this.setState({errors})


      for (var i in errors){

        if (errors[i]['error'] == true && error == null) {

          error = errors[i].errorMsg
        }
      }
      this.setState({error})
    }
    handleBlur(e){

      var message  = this.state.message
      var errors = this.state.errors
      var error = this.state.error
      var error = null

      if (!e.target.value ||e.target.value == '') { // le champ est vide
        errors[e.target.id] = {error:true,errorMsg:'Vous devez remplir tous les champs'}
        message[e.target.id]=null
      } else if (e.target.type == 'email' && e.target.validity.valid == false) {
        errors[e.target.id] = {error:true,errorMsg:"Cet email n'est pas valide"}
        message[e.target.id]=null
      } else if (e.target.type == 'tel' && e.target.validity.valid == false) {
        errors[e.target.id] = {error:true,errorMsg:"Ce Téléphone n'est pas valide"}
        message[e.target.id]=null
      } else {
        errors[e.target.id] = {error:false,errorMsg:null}
        message[e.target.id]=e.target.value
      }

      this.setState({message})
      this.setState({errors})


      for (var i in errors){

        if (errors[i]['error'] == true && error == null) {
          error = errors[i].errorMsg
        }
      }
      this.setState({error})

    }
    render(){
      var home = this.props.website.home

      return (
        <div>
          <SidebarMenu ref='sidebarmenu'  closeSideBar={()=>this.refs.topmenu.shouldDisplay = false}/>
          <TopMenu     ref='topmenu' path={this.props.path} openSideBar={(bool)=>this.refs.sidebarmenu.setState({visible:bool})}/>
          <Sidebar.Pushable  >

        <Sidebar.Pusher>

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
                            <div dangerouslySetInnerHTML={{__html: home.items[4].title}}></div>
                        </Header>

                        <Form autocomplete="off" disabled={this.state.loading} onSubmit={this.handleSubmit}  error={this.state.error && this.state.error != ''} inverted style={{width:'60%',margin:'auto',textAlign:'left'}}>

                            <Form.Input
                              id='contactName'
                              error={this.state.errors.contactName && this.state.errors.contactName.error == true}
                              transparent
                              label='Votre Prénom et votre Nom'
                              onChange={this.handleChange}
                              onBlur={this.handleBlur} />

                          <Divider />

                            <Form.Dropdown
                              fluid
                              error={this.state.errors.type && this.state.errors.type.error == true}
                              selection
                              id='type'
                              style={{background:'transparent'}}
                              label='Vous êtes :'
                              value = {this.state.message.type}
                              options={[
                              {text:'Une Asso',value:'asso'},
                              {text:'Une Collectivité publique',value:'collectivity'},
                              {text:'Une Entreprise',value:'company'},
                              {text:'Un Etudiant',value:'student'},
                              {text:'Un Journaliste',value:'media'},
                              {text:"Quelqu'un d'autre",value:'other'},
                            ]}
                            onChange={this.handleDropdown}
                             />

                          <Divider />

                            <Form.Input
                              id='detail'
                              error={this.state.errors.detail && this.state.errors.detail.error == true}
                              transparent
                              label='Précisez...'
                              onChange={this.handleChange}
                              onBlur={this.handleBlur}
                             />

                          <Divider />

                            <Form.Input
                              autocomplete="off"
                              transparent
                              id = 'email'
                              type='email'
                              error={this.state.errors.email && this.state.errors.email.error == true}
                              transparent
                              label='E-mail'
                              style={{background:'transparent'}}
                              onChange={this.handleChange}
                              onBlur={this.handleBlur}
                            />

                          <Divider />

                            <Form.Input
                              id='phone'
                              type='tel'
                              pattern = "^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                              error={this.state.errors.phone && this.state.errors.phone.error == true}
                              transparent
                              label='Téléphone'
                              onChange={this.handleChange}
                              onBlur={this.handleBlur}
                             />

                          <Divider />

                            <Form.TextArea
                              id='text'
                              label='Dites nous en plus'
                              style={{background:'transparent'}}
                              error={this.state.errors.text && this.state.errors.text.error == true}
                              onChange={this.handleChange}
                              onBlur={this.handleBlur}
                             />

                          <Message
                            error
                            header='Erreur'
                            content={this.state.error}
                          />
                          <Form.Field>
                            <Form.Button loading={this.state.loading} fluid labelPosition='right' icon='mail' type='submit' content='Envoyer' className='MainButton' size='big' style={{marginTop: '1em'}}/>

                          </Form.Field>
                        </Form>



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
                            <div dangerouslySetInnerHTML={{__html: home.items[4].title2}}></div>
                        </Header>


                    </Grid.Column>
                    <Grid.Column only='mobile tablet' width={14} centered textAlign='center'>
                        <Header
                            as='h2'
                            style={{
                                fontSize: '2em', textAlign: 'center', fontWeight: '200', color: 'white',
                                letterSpacing: '-0.03em', lineHeight: '1.8em'
                            }}
                        >
                            <div dangerouslySetInnerHTML={{__html: home.items[4].title}}></div>
                        </Header>

                        <Button className='MainButton' as='a' size='small' style={{marginTop: '1em'}}>
                            {home.items[4].buttontitle}
                            <Icon name='right arrow'/>
                        </Button>

                        <Header
                            as='h2'
                            style={{
                                fontSize: '1.2em',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                marginTop: '2em',
                                color: 'white',
                                lineHeight: '1.3em',
                            }}
                        >
                            <div dangerouslySetInnerHTML={{__html: home.items[4].title2}}></div>
                        </Header>


                    </Grid.Column>
                </Grid>
            </Container>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
    )
    }
  }
  export default ContactForm;

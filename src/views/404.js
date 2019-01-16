import React, {Component} from 'react';
import { Grid,Segment,Header,Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom';
class NotFound extends React.PureComponent {
constructor(props){
  super(props)
  this.state = {}
}
render(){
  return(
    <Grid id='formGrid' style={{minHeight:"100vh"}}>
      <Grid.Column  textAlign='center' verticalAlign='middle'>
        <Segment  attached='top' id='header'>
          <Header icon   as='h2'  textAlign='center'>
            <Icon name='settings' />
            <Header.Subheader>Erreur 404 : Page non trouvée</Header.Subheader>
            <Header.Subheader><Link to="/">Accueil</Link></Header.Subheader>

          </Header>
        </Segment>
      </Grid.Column>
    </Grid>

  )
}

}
export default NotFound;

import React, {Component} from 'react';
import {
    Grid,
    Header,
    List,
    Menu,
    Segment,
    Visibility,
    Transition,
    Card,
    Sidebar


} from 'semantic-ui-react'

import TopMenu from '../components/topmenu'
import SidebarMenu from '../components/sidebar'
import headerhome from '../images/headerHome.png'
import numeriser from '../images/numeriser.png'
import parcoursutilisateur from '../images/parcoursutilisateur.png'
import Footer from '../components/footer'
import functions from '../config/functions'
import firebase from '../config/initfirebase'
import banqueImage from '../images/home/index'
import Fond from '../images/home/fond.png'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var home = this.props.website.home

        return (
          <div>
          {/* Debut 1 */}
          <SidebarMenu ref='sidebarmenu' path={this.props.path}  closeSideBar={()=>this.refs.topmenu.shouldDisplay = false}/>
          <TopMenu     ref='topmenu' path={this.props.path} openSideBar={(bool)=>this.refs.sidebarmenu.setState({visible:bool})}/>
          <Sidebar.Pushable  >


          <Sidebar.Pusher>
            {/* fin 1 */}
                {/* 1ère Partie de la page en bleue */}
                <Segment
                    textAlign='center'
                    vertical
                    style={{
                        padding: '1em 0em',
                        backgroundColor: '#f7f9fa',
                    }}
                    >
                  <Grid centered style={{marginTop: '5em'}}>
                    <Grid.Column computer={12} tablet={15} centered textAlign='center'>
                      <Header
                          as='h2'
                          content='Informations légales'
                          style={{
                              fontSize: '3em',
                              textAlign: 'center',
                              fontWeight: '200',
                              marginTop: '1em',
                              marginBottom: '1em',
                              color: '#4F4F4F',
                          }}
                      />

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Présentation du site
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Le site www.monkeymoney.fr est édité  par MONKEY MONEY, SAS de l'ESS (Economie Sociale et Solidaire) et hebergé par OVH. En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, et ce pour les utilisateurs du site internet, il est précisé les informations suivantes :
                      </p>
                      <List textAlign='left' margin={10} style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        padding: '0em 5.2em',
                        paddingBottom: '2em'}}>
                        <List.Item>Siège Social : 56 boulevard de l'hopital, 75013, Paris</List.Item>
                        <List.Item>Immatriculation : RCS de Paris sous le numéro 827 913 849</List.Item>
                        <List.Item>Responsable de la publication : Nicolas Caillouet - contact@monkeymoney.fr</List.Item>
                        <List.Item>Webmaster : Geoffroy Mounier - contact@monkeymoney.fr</List.Item>
                        <List.Item>Hébergeur : OVH SAS, 2 rue Kellerman, 59100, Roubaix</List.Item>
                      </List>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Conditions générales d'utilisation du site et des services proposés
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        L’utilisation du site www.monkeymoney.fr implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site www.monkeymoney.fr sont donc invités à les consulter de manière régulière.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par MONKEY MONEY, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Le site www.monkeymoney.fr est mis à jour régulièrement par MONKEY MONEY. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Description des services fournis
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Le site www.monkeymoney.fr a pour objet de fournir une information concernant l’ensemble des activités de la société.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        MONKEY MONEY s’efforce de fournir sur le site www.monkeymoney.fr des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Toutes les informations indiquées sur le site www.monkeymoney.fr sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site www.monkeymoney.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Limitations contractuelles sur les données techniques
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Le site Internet www.monkeymoney.fr ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Limitations contractuelles sur les données techniques
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Le site Internet www.monkeymoney.fr ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Propriété intellectuelle et contrefaçons
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        MONKEY MONEY est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. La majorité des éléments ont été créés par Pascale Caillouet, graphiste officielle de Monkey Money. Certains éléments ont été fournis par le site www.flaticon.com.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : MONKEY MONEY. A l'exception des éléments fournis par www.flaticon.com. Pour toute question relative à ces éléments, l'utilisateur du site pourra contacter le responsable de publication du site www.monkeymoney.fr
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Conformément à l’article L.122-4 du code de la propriété intellectuelle toute représentation ou reproduction non expressément autorisée, intégrale ou partielle et par quelque procédé que ce soit serait illicite et constituerait une contrefaçon sanctionnée par les articles L. 335-2 et suivants du code de la propriété intellectuelle.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Limitations de responsabilité
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        MONKEY MONEY ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site www.monkeymoney.com, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        MONKEY MONEY ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site www.monkey money.fr.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Des espaces interactifs (possibilité de poser des questions grâce à un formulaire en ligne, accessible depuis plusieurs pages du site) sont à la disposition des utilisateurs. MONKEY MONEY se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, MONKEY MONEY se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Gestion des données personnelles
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        A l'occasion de l'utilisation du site www.monkeymoney.com, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site www.monkeymoney.fr, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      En tout état de cause MONKEY MONEY ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site www.monkeymoney.com. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site www.monkeymoney.fr l’obligation ou non de fournir ces informations.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Aucune information personnelle de l'utilisateur du site www.monkeymoney.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de MONKEY MONEY et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis-à-vis de l'utilisateur du site www.monkeymoney.fr.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Liens hypertextes et cookies
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Le site www.monkeymoney.fr contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de MONKEY MONEY. Cependant, MONKEY MONEY n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      La navigation sur le site www.monkeymoney.fr est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut à droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour désactiver les cookies.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences. Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Droit applicable et attribution de juridiction
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Tout litige en relation avec l’utilisation du site www.monkeymoney.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Les principales lois concernées
                      </Header>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '1.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                        Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.
                      </p>
                      <p textAlign='left' style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        marginTop: '0.6em',
                        padding: '0em 5.2em',
                        paddingBottom: '1em'

                      }}>
                      Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
                      </p>

                      <Header textAlign='left' as='h2' style={{marginTop:'2em', color:'#5EC4A9', fontWeight:'normal', paddingLeft:'3em', paddingRight:'3em'}}>
                        Lexique
                      </Header>
                      <List textAlign='left' margin={10} style={{
                        ontSize: '1.2em',
                        textAlign: 'justify',
                        color: '#605E5E',
                        padding: '0em 5.2em',
                        paddingBottom: '2em'}}>
                        <List.Item>Utilisateur : Internaute se connectant, utilisant le site susnommé.</List.Item>
                        <List.Item>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</List.Item>
                      </List>




                    </Grid.Column>
                  </Grid>
                </Segment>


                <Footer/>
              </Sidebar.Pusher>
            </Sidebar.Pushable>

          </div>


        )
    }
}

export default Home;

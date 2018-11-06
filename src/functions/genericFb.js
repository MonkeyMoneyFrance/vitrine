import firebase from '../config/initfirebase'


var langue = null;



function getLanguage(callback) {

     let language;
     if(localStorage.getItem("language")){
       language = localStorage.getItem("language");
     }
     else if(navigator.language.substring(0, 2).toUpperCase() == 'FR' || navigator.language.substring(0, 2).toUpperCase() == 'EN'){
       language = navigator.language.substring(0, 2).toUpperCase()
     }
     else{
       language = "FR"
     }
     callback(language)
 }

function retrieveLanguageFile(language) {
    //let language = "FR"
    if (localStorage.getItem("langFile"+language)) {
      console.log("ici")
      langue = JSON.parse(localStorage.getItem("langFile"+language))

    } else {
      console.log("là")
      let ref = firebase.storage().ref("Lang").child(language+'/vitrineConfig.json');
      ref.getDownloadURL().then(function (url) {

          var xhr = new XMLHttpRequest();
          xhr.responseType = 'json';
          xhr.onload = function (event) {
              langue = xhr.response;
              localStorage.setItem('langFile'+language, JSON.stringify(langue))
          };
          xhr.open('GET', url);
          xhr.send();

      }).catch(function (error) {
          console.log("Echec du chargement du dictionnaire");
      })
    }
}


function replaceString(value) {

    if (!value) return

    var array = value.match(/(%)\w+/g);

    if (langue !== null) {

        for (var i in array) {
          //on teste l'existence de la traduction
          if (langue[array[i]]) value = value.replace(new RegExp(array[i], 'g'), langue[array[i]])
        }
    }

    return value;
}


// function format(timestamp,format) {
//
//   if (getLanguage()=='EN') format=format.replace(/D\/MM|DD\/MM/gi,'MM/DD')
//
//   return moment(timestamp).format(format)
//
// }


export default {
    replaceString,
    retrieveLanguageFile,
    getLanguage,
}

import firebase from '../config/initfirebase'
import indexDictionnary from '../language/index'


var dictionary = null;

function getLanguage() {

    let language
     if(localStorage.getItem("language")=='FR'||localStorage.getItem("language")=='EN'){
       language = localStorage.getItem("language");
     }
     else if(navigator.language.substring(0, 2).toUpperCase() == 'FR' || navigator.language.substring(0, 2).toUpperCase() == 'EN'){
       language = navigator.language.substring(0, 2).toUpperCase()
     }
     else{
       language = "FR"
     }
     localStorage.setItem("language",language)
     return language
 }

 function setDictionary(language,callback) {
   //language in {'FR','EN',...}
   dictionary = indexDictionnary[language]

   callback()
 }



 function replaceString(value) {

     if (!value) return

     var array = value.match(/(%)\w+/g);

     if (dictionary !== null) {

         for (var i in array) {
           //on teste l'existence de la traduction
           if (dictionary[array[i]]) value = value.replace(new RegExp(array[i], 'g'), dictionary[array[i]])
         }
     }

     var arrayEnv = value.match(/(REACT_APP)\w+/g)
     for (var i in arrayEnv) {
         value = value.replace(new RegExp(arrayEnv[i], 'g'), process.env[arrayEnv[i]]);
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
    setDictionary,
    getLanguage,
}

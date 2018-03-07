const functions = require('firebase-functions');

const cors = require('cors')({origin: true});




const nodemailer = require('nodemailer');
const mailTransport = nodemailer.createTransport(`smtps://monkeymoneybot:weiH8ahb@smtp.gmail.com`);

// const mailTransport = nodemailer.createTransport(`smtps://monkeymoneybot:weiH8ahb@smtp.gmail.com`);
var auth = {
  auth: {
    api_key: 'key-6eda6fb6e5fbd3466fb55f6f9058ac2e',
    domain: 'sandbox96f52829a63a4436929abb0e30f9e7e0.mailgun.org'
  }
}



// Sends a welcome email to the given user.
function sendEmail(email,subject,html) {
  return new Promise(function(resolve, reject) {
    var body = {
    from: email,
    to: "contact@monkeymoney.fr",
    subject: subject,
    html: html
  }
  mailTransport.sendMail(body)
   .then(() => {
       resolve('New welcome email sent to:', email)
     }).catch(function(error){reject(error)});

})
}


exports.MessagePeople = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const message = JSON.parse(req.body.message)
   if
   (!message.contactName ||
    !message.type ||
    !message.detail ||
    !message.email ||
    !message.phone ||
    !message.text) {
      res.status(200).send(JSON.stringify({ "response"  : "Paramètres Manquants"}));
    } else {
      var msg = message.text.replace(/\r\n|\r|\n/g, '<br />');
      var html = "<p><strong>Message Reçu !</strong></p>";
      html += "<p><strong>Nom de l'Expéditeur:</strong> "+message.contactName+" | +" +message.phone +" | "+message.email+"</p>";
      html += "<p><strong>Type :</strong> "+message.type+" | "+message.detail+"</p>";
      html += "<p><strong>Contenu :</strong></p>";
      html += "<p>"+msg+"</p>";
      sendEmail(message.email,"Message reçu de Site Vitrine !",html).then(function(){
        res.status(200).send(JSON.stringify({ "response"  : true}));
      })
      .catch(function(error){
        console.log(error)
        res.status(200).send(JSON.stringify({ "response"  : error}));
      })
    }

  })
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

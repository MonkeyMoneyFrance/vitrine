const functions = require('firebase-functions');

const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
const fs = require('fs')
admin.initializeApp()

const nodemailer = require('nodemailer');
const mailTransport = nodemailer.createTransport(`smtps://monkeymoneybot:weiH8ahb@smtp.gmail.com`);

// const mailTransport = nodemailer.createTransport(`smtps://monkeymoneybot:weiH8ahb@smtp.gmail.com`);
var auth = {
  auth: {
    api_key: 'key-6eda6fb6e5fbd3466fb55f6f9058ac2e',
    domain: 'sandbox96f52829a63a4436929abb0e30f9e7e0.mailgun.org'
  }
}

const ASSO_NAME = 'Monkey Money'

function getMeta(meta,host,url){
	return new Promise(function(resolve,reject){
		if (url == null || !url ||  url == '') reject('no metadata')
		else {

			admin.database().ref('publish/'+url).once('value',function(snapshot){
				var org = snapshot.val()
				if (org == null) reject('no metadata')
				else {
					meta += `<meta property="og:title" content="${(org.title||meta.asso).replace(/%ASSO_NAME/g,ASSO_NAME)}" />`;
					meta += `<meta property="og:description" content="${(org.description||meta.asso).replace(/%ASSO_NAME/g,ASSO_NAME)}" />`;
					meta += `<meta property="og:image" content="${org.logo}" />`;

					// og += `<meta property="og:url" content="https://example.com/organisation/${org.slug}" />`;
					resolve(meta);
				}
				// let og = `<meta property="fb:app_id" content="921373517372" />`;


			})
		}

	})
};
function getMetaGlobal(url,host){
	return new Promise(function(resolve,reject){

			admin.database().ref('tuning/').once('value',function(snapshot){
				var org = snapshot.val()
				if (org == null) reject("<title></title>")
				else {
					let meta = `<meta charset="utf-8">`
					if (org.asso) meta += `<title>${org.asso.replace(/%ASSO_NAME/g,ASSO_NAME)}</title>`;
					if (org.description) meta += `<meta name="description" content="${org.description.replace(/%ASSO_NAME/g,ASSO_NAME)}" />`;
					meta += org.meta || ``;
					meta += `<meta property="og:type" content="website" />`;
					meta += `<meta property="og:locale" content="fr_FR" />`;
					meta += `<meta property="og:org:url" content="${host+'/'+url}" />`;

					getMeta(meta,host,url).then(function(transformedMeta){
						resolve(transformedMeta)
					}).catch(function(){
						if (org.asso) meta += `<meta property="og:title" content="${org.asso.replace(/%ASSO_NAME/g,ASSO_NAME)}" />`;
						if (org.asso_name) meta += `<meta property="og:site_name" content="${org.asso_name.replace(/%ASSO_NAME/g,ASSO_NAME)}" />`;
						if (org.description) meta += `<meta property="og:description" content="${org.description.replace(/%ASSO_NAME/g,ASSO_NAME)}" />`;
						if (org.logo) meta += `<meta property="og:image" content="${org.logo}" />`;
						resolve(meta)
					})
				}


			})


	})
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




exports.setHost = functions.https.onRequest((req, res) => {
	const userAgent = req.headers['user-agent'].toLowerCase();
	let indexHTML = fs.readFileSync('./index.html').toString();
	const path = req.path ? req.path.split('/') : req.path;
	const ogPlaceholder = '<meta name="functions-insert-dynamic-og">';
	const metaPlaceholder = '<meta name="functions-insert-dynamic-meta">';

	const isBot = userAgent.includes('googlebot') ||
		userAgent.includes('yahoou') ||
		userAgent.includes('bingbot') ||
		userAgent.includes('baiduspider') ||
		userAgent.includes('yandex') ||
		userAgent.includes('yeti') ||
		userAgent.includes('yodaobot') ||
		userAgent.includes('gigabot') ||
		userAgent.includes('ia_archiver') ||
		userAgent.includes('facebookexternalhit') ||
		userAgent.includes('twitterbot') ||
		userAgent.includes('developers\.google\.com') ? true : false;

	if (isBot && (path && path.length > 1 ) || true) {
		// const slug = path[2];
		console.log('hello Bot :-)', userAgent)
		getMetaGlobal(path[1],"https://www.monkeymoney.fr/").then(function(org){

			indexHTML = indexHTML.replace(metaPlaceholder, org);

			res.status(200).send(indexHTML);
			return;
		})
		// admin.database().ref(`published/${slug}`).once('value').then(snapshot => {
		// 	const org = snapshot.val();
		// 	if (org) {
		// 		org.slug = slug;
		// 	}

		// });

	} else {
		res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
		res.status(200).send(indexHTML);
	}

	// optional - turn on caching: res.set('Cache-Control', 'public, max-age=300, s-maxage=600');



})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

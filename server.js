let _			= require('lodash');
let data 		= _.fill(Array(3),'a');
let express 	= require('express');
let bodyParser 	= require('body-parser');
let app			= express();
	app.use(bodyParser.json());
let product 	= require('./controllers/products.js')(app);
let mongoose 	= require('mongoose');

mongoose.connect('mongodb://stereojr:stereojr@ds125578.mlab.com:25578/learnnode');

mongoose.Promise = global.Promise;

app.get('/',(req,res) =>{
	res.send('Hello Bro');
});

app.listen(3000,()=>{
	console.log('Server is Running..');
});
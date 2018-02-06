let _ 			= require('lodash');
let Product 	= require('../models/product.js');

let product = (app) => {
	// let _products = [];
	// CREATE
	app.post('/api/products',(req,res) => {
		// _products.push(req.body);

		let newProduct = new Product(req.body);
		newProduct.save().then(()=>{
			res.json({"info":"product created"});
		}).catch(err=>{
			console.error(err);
		});
	});

	// READ
	app.get('/api/products',(req,res) => {
		Product.find().then(products =>{
			res.json(products);
		}).catch(err=>{
			console.error(err);
		});
	});

	// UPDATE
	app.put('/api/products/:id',(req,res)=>{
		// let index = _.findIndex(_products,{
		// 	id:parseInt(req.params.id)
		// });

		// _.merge(_products[index],req.body);

		Product.update({_id:req.params.id}, req.body).then(()=>{
			res.json({"info":"products updated"});
		}).catch(err=>{
			console.error(err);
		});
	});

	// DELETE
	app.delete('/api/products/:id',(req,res) => {
		// _.remove(_products,product => {
		// 	return product.id === parseInt(req.params.id);
		// });

		Product.remove({_id:req.params.id}).then(()=>{
			res.json({"info":"products deleted"});
		}).catch(err=>{
			console.error(err);
		});
	});
}; 

module.exports = product;
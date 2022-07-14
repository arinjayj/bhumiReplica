const express = require('express');
var settings =require('../config/settings.js');
var router = express.Router();

router.get('/',function(req,res){
	console.log("server hit");
	res.send("get method hit")
});

router.get('/testGet',function(req,res){
	console.log("server hit get");
	res.send("get method hit")
});

router.post('/testPost',function(req,res){
	console.log("server hit post");
	res.send("post method hit")
});

module.exports = router;
//curl -X POST http://localhost:8082/bhumi/testPost/

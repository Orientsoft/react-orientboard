 'use strict'

var BoardManager= require('../lib/board-manager-new');


var bm =new BoardManager({'mongo':{host:'127.0.0.1','db':'reactboard'}})

bm.connect();


setTimeout(function(){

	

	
	var a= {
  			name: 'MyBoard',
  			blocks:
   			[ { boxes: [],
       			w: '800',
       			h: '600',
       			img: null,
       			pubType: 'private',
       			id: 1457845140123 } ],
  				owner: 'test' 
  			}
  	//bm.findOne(null,{}).then((item)=>{console.log(item)})
  	//bm.create('test',a).then((item)=>{console.log(item)})
    bm.list('test').then((item)=>{console.log(item.length)})

}, 200)


//


// var Promise = require('bluebird');  
// var mongodb = require('mongodb');  
// Promise.promisifyAll(mongodb);

// var objID =require('mongodb').ObjectId

// function getConnectionAsync(){
//     // process.env.MongoDbUrl stored in my .env file using the require above
//     console.log("init")
//     return mongodb.MongoClient.connectAsync('mongodb://127.0.0.1:27017/reactboard')
//         // .disposer is what handles cleaning up the connection
     
// }




// var Promise = require('bluebird');  
// var db = require('mongodb');  
// Promise.promisifyAll(db);




// var a=getConnectionAsync()



    

// Promise.using(
// a,
// function(db){
// 	return db.collection("boards").findOneAsync({_id:new objID("sdfsdfs")})
// }
// ).then(function(result){
// 		console.log(result)
// }).catch(function(e){
// 	console.log(123123,e)
// })


// Promise.using(
// a,
// function(db){
// 	return db.collection("boards").findOneAsync({_id:new objID("sdfsdfs")})
// }
// ).then(function(result){
// 		console.log(result)
// }).catch(function(e){
// 	console.log(123123,e)
// })


// // var db = require("../lib/mongopromise").create({
// // 	db: "reactboard",
// // 	host: "127.0.0.1",
// // 	port: 27017
// // });


// // var db = require("../lib/mongopromise").create('mongodb://127.0.0.1:27017/reactboard');

// // var collection = db.collection("boards");

// // collection.findOne({ name: "11MyBoard"}).then(function(data) {
// // 	console.log(JSON.stringify(data));
// // })

// const BoardManager = require('../lib/board-manager-new'),
//       objID =require('mongodb').ObjectId

// var opts = {
//     "mongo": {
//         "host": "127.0.0.1",
//         "port": 27017,
//         "db": "reactboard",
//         "username": null,
//         "password": null
//     }
// }


// var bm = new BoardManager(opts)
// bm.connect()

// try{
// 	var oid=new objID('56e4f3949be1a7f9a1adde12111')
// 	bm.findOne(null,{"_id":oid}).then((result)=>{
// 	console.log(result)
// })
// }catch(e){
// 	console.log(e)
// }


// // var mongodb = require('mongodb'),
// // 	Database = mongodb.Db,
// // 	Connection = mongodb.Connection,
// // 	Server = mongodb.Server;


// // 	var s=new Database('mongodb://127.0.0.1:27017/reactboard')

// // console.log(s);
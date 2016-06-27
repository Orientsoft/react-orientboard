
//var jq = require('jquery');


var request = require('request');




var timerId={};

var callbacks=[];

var log1=function(msg){
        console.log("this is log1:",msg);
    }

var log2= function(msg){
        console.log("this is log2:",msg);
    }



function start(interval,url,cb,once){

	if(callbacks.indexOf(cb)>-1){

		console.log('already start');
	}else{

	  if(!once){
		  var id = setInterval(function(){
		  	// jq.get(url, function(result){
     //    	cb(result)
    	// });

	request(url, function (error, response, body) {
  	if (!error && response.statusCode == 200) {
    	if(cb){
    		cb(body)
    	 }else{
    	 	console.log('debug:',body);
    	 }
  	}
	})

		  },interval);	
		  timerId[id]=cb;	
 		return id;
	  }else{

	  	 setTimeout(function(){
		  	// $.get(url, function(result){
     //    	cb(result)
    	// });

		  		request(url, function (error, response, body) {
  	if (!error && response.statusCode == 200) {
    	if(cb){
    		cb(body)
    	 }else{
    	 	console.log('debug:',body);
    	 }
  	}
	})

		  },interval);	


	  }
	 
	}   

}

function stop(id){

      clearInterval(id);

}


var id=start(1000,'http://127.0.0.1:3000/chart/highchart/1?rows=1',function(msg){console.log(msg);})


setTimeout(function(){console.log('after 5000, stop'),
stop(id);
}, 5000);

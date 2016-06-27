
var mqtt = require('mqtt');

    var host = 'ws://localhost:3883';
    var client = mqtt.connect(host);

    var callback={};

var log1=function(msg){
        console.log("this is log1:",msg);
    }

var log2= function(msg){
        console.log("this is log2:",msg);
    }


   function sub(topic,cb){
        if(!callback[topic]){
            callback[topic]=[]
            callback[topic].push(cb);
        }else if(callback[topic].indexOf(cb)==-1){
            callback[topic].push(cb);
        }else{
            console.log('cb already used');
        }

        client.subscribe(topic);

    }


   function unsub(topic,cb){

    if(callback[topic]){
        var idx=callback[topic].indexOf(cb);
        if( idx == -1) return;

        callback[topic].splice(idx,1)
    }

    if(callback[topic].length==0){
        console.log('计数器为0,停止订阅');
        delete callback[topic];
        client.unsubscribe(topic)

    }

   }

    client.on('connect', function() {
            //client.subscribe("test",log1);
            //client.subscribe("test",log2);
            sub("test",log1);
            sub("test",log1);
            sub("test",log2);
            
            console.log("mqtt connect sucess");
    });
   
    
    client.on('message', function(topic, payload, packet) {
            console.log('msg coming',topic,""+payload,callback);
            if(callback[topic]){

                callback[topic].forEach(function(cb){
                    cb(""+payload);
                })

            }else{
                console.log("出现在这里的消息是因为Topic:",topic,"计数器丢失, 请检查");
            }
            
    });

    
var MsgSender = new WebSocket("ws://127.0.0.1:1000");

MsgSender.addEventListener("open", function(ev){
	console.log("open", ev);
})

MsgSender.addEventListener("message", function(ev){
	console.log("message",ev);
})

MsgSender.addEventListener("error", function(ev){
	console.log("error",ev);
})

MsgSender.addEventListener("close", function(ev){
	console.log("close",ev);
})
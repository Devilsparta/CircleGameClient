var MsgSender = new WebSocket("ws://127.0.0.1:1000");
var IsOpen = false;
MsgSender.addEventListener("open", function (ev) {
	IsOpen = true;
	console.log("open", ev);
})

MsgSender.addEventListener("message", function (ev) {
	console.log("message", ev);
})

MsgSender.addEventListener("error", function (ev) {
	console.log("error", ev);
})

MsgSender.addEventListener("close", function (ev) {
	console.log("close", ev);
})

setInterval(function () {
	if (!IsOpen) {
		return false;
	}
	var jsonData = JSON.stringify({ a: 100 });
	MsgSender.send(jsonData);

}, 1000);
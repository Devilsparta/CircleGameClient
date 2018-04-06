var IsOpen = false;
var MsgSender = null;

function Login(userName) {

}

function InitMsgSender() {
	GetMsgSneder().Init({
		Url: "ws://127.0.0.1:1000",
		OnMessage: function (ev) {
			var data = JSON.parse(ev.data);
			Cmder.DispatchCmd(data);
		},
		OnError: function (ev) {
			console.log("error", ev);
		},
		OnClose: function (ev) {
			console.log("close", ev);
		},
		OnOpen: function (ev) {
			IsOpen = true;
			console.log("open", ev);
		}
	})
}

setInterval(function () {
	if (!IsOpen) {
		return false;
	}
	var jsonData = JSON.stringify({ a: 100 });
	MsgSender.send(jsonData);
}, 1000);


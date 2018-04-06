var IsOpen = false;
global.MsgSender = GetMsgSender();

function Login(userName) {
	InitMsgSender();
}

function InitMsgSender() {
	global.MsgSender.Init({
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
	});
	global.EvEmitter.On("Msger_SendMsg", global.MsgSender.Send.bind(global.MsgSender));
}
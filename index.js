const app = require('express')();
const http = require('http').createServer(app);

app.get('/',(req,res)=>{
    res.end("Server running Yay!!");
});


//Const Socket.oi
const io = require('socket.io')(http);

io.on("connection",(userSocket)=>{
    userSocket.on("send_stream",(data)=>{
        userSocket.broadcast.emit("receive_stream",data);
    });
});

http.listen((process.env.PORT || 3000),()=>{
    console.log(http.address());
});
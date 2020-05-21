const app = require('express')();
const http = require('http').createServer(app);

var port = Number(process.env.PORT || 3000);
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

http.listen(port,()=>{
    console.log(http.address());
});
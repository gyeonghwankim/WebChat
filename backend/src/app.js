require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//DB 연동 , mongoDB 사용
const connect = require("./schemas");
connect()

//middle ware
app.use(cors()); //
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes 설정
const routes = require("./routes");
app.use("/", routes);

// Set socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 4000;

//server starts
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

io.on('connection', (socket) => {
    console.log(`${socket.id} is connected`);
    io.to(socket.id).emit('connection_success', {socketId: socket.id, message: "입장"})

    socket.on('send_chat', (data) => {
        console.log(`${socket.id} : ${data.message}`);
        io.emit('receive_chat', {socketId: socket.id, message: data.message});
    })
})
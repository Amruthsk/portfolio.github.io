const http = require("node:http");

//instance of server - created server
const server = http.createServer(function (req,res){
    //logic for handling the request
    //end of the respose close the connection
    //api call /getmydata
    if(req.url === "/getmydata"){
        res.end("There is no data");
    }
    res.end("hello world I am here");
});

//make server listen
server.listen(1111);


//first listening start
//localhost:1111- (request) @[Browser]
//localhost:1111/getmydata- (request) @[Browser]

//
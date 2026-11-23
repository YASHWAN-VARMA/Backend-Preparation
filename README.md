# Backend-Preparation
Notes -> Node.js , express , MongoDB and bcrypt and JWT 
Module -> A file of code that u can reuse
module.exports
npm-> Node Package Manager It installs packages and package.json lists them
Event Loop work
1. Call stack -> lines one by one on main thread
2. Hand off ->slow work handled to background and moves to the next line
3. callback queue->completed background work waits in callback queue
4. Event Loop->when call stack is empty it runs callbacks in queue
File System Methods
1. fs.readFile(path,"utf-8",cb)
2. fs.writeFile(path,data,cb)
3. fs.appendFile(path,data,cb)
4. fs.unlink(path,cb)
Express
It connects HTTP method and a path to handler that sends one response for every req
It is a framework on top of node.js
route = (HTTP method + path + Handler)
HTTP stands for HyperText Transfer Protocol.
Every request passes through middleware

Requests--> req.params after ':' , req.query after '?' , req.body , req.header
Responses--> res.send() , res.json({...}) , res.status(404).send("")

API-> Application Programming Interface
Get -> 200(OK) / read 
Post ->201(Created) / create
Put -> 200(OK) / replace
patch -> 200(OK) / change only some fields
delete ->200(OK) / Remove it


200 -> OK                      Request Worked
201 -> CREATED                 A new record was created
400 -> BAD REQUEST             Input missing or wrong
401 -> UNAUTHORIZED            Not Logged in or token is missing/Invalid/Expired
403 -> FORBIDDEN               Logged in, but your role is not Allowed 
404 -> NOT FOUND               The route or the record does not exist 
500 -> INTERNAL SERVER ERROR   Something crashed on the server

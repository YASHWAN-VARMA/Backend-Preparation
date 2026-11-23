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
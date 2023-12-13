// const app = require('./app')
// const fs = require('fs')
// const server = require('http')
// var a = 1;
// var b = 2;
// var c = a+b;
// console.log(c)
// for(i=5;i<=15;i++){
//     console.log(i)
// }
// const array=[1,2,3,4,4,5,5,6,7]
// const arr =     array.filter((item)=>{
//     return item>4;
    
// })
// console.log(arr)



// console.log(app.x)


// // moduke ===========================================

// console.log('hello world')
// fs.writeFileSync('first.js','hello')


// // CREATE SERVER================================================

// const response =(req,resp)=>{
// resp.write('<h1>response two</h1>');
// resp.end();
// }
// server.createServer(response).listen(4800);


// ARRAY filter========================================



// const array = [1,2,2,8,8,9,6,5]
// const arr=array.filter((item)=>{
//     return item===2
// })
// console.log(arr)

// Color package=============================

// const color = require('color')


// api creation=====================

const http = require('http')
const data= require('./Data')

http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application/json'})
resp.write(JSON.stringify(data.data));
resp.end();
}).listen(4000)

// 


const array = [1,2,5,8,8,8]
const arraytwo= array.filter((item)=>{
   return item>2
})
 console.log(arraytwo)




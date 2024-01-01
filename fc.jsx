// const http = require ('http')
// const path = require('path')
// const dirpath = path.join(__dirname, 'App' )
// const fs = require('fs')
// const input = process.argv
// //Condition
// const a =10;
// if (a==10){
//     console.log("True");
// }
// else{
//     console.log("False")
// }
// // Loop

// for(i = 0 ; i<=5 ; i++){
//     console.log(i)
// }

// //Array

// const arr=[0,1,2,3,4,5,6,7,8,9]
// console.log(arr)
// console.log(arr[0])

// //filter
// const filter = arr.filter((item)=>{
//     return item>=2
// })
// console.log(filter)
// //Creating a server

//     // http.createServer((req, resp)=>{
//     //     resp.write("<h1>Welcome</h1>");
//     //     resp.end();
//     // }).listen(4000)

// //function

// // const fun=(req , resp)=>{
// //     resp.write("<h1>Welcome to hello world</h1>");
// //     resp.end();
// // }


// // http.createServer(fun).listen(5002)

// //Api

// // http.createServer((req,resp)=>{
// //     resp.writeHead(200,{'Content-Type':'application/json'});
// //     resp.write(JSON.stringify(Data.data));
// //     resp.end();

// // }).listen(5000)

// //input from the command line


// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log('Error found')
// }


// // path

// console.log(dirpath)

// for(i=0 ; i<=5 ; i++){
//     fs.writeFileSync(`${dirpath}/newfile${i}.js`, "Welcome")
// }

// fs.readdir(dirpath,(err,file)=>{
//     file.forEach((item)=>{
//         console.log(item)
//     })
// })




const fs = require('fs')
const http= require('http');
const Data = require('./Data');
const path = require('path');
const input = process.argv
const dir = path.join(__dirname,'App')
for(i=0;i<=9;i++){
    fs.unlinkSync(`${dir}/hee${i}.jsx`)
}
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log('invalid input')
}
// a=1;
// b=2;
// c=a+b;
// console.log(c)
// for(i=0;i<=10;i++){
//     console.log(i)
// }
// const arr = [0,12,5,48,82,96]
// for(i=0;i<=5;i++){
//     if(arr[i]>12){
//         console.log(arr[i])
//     }
// }
// const filter = arr.filter((item)=>{
//     return item>12
// })
// console.log(filter)

// fs.writeFileSync('fs.js','heloo,mk')

// http.createServer((req,resp)=>{
//     resp.writeHead('<h1>hello worl</h1>');
//     resp.end();
// }).listen(4000)
// const fum=(req,resp)=>{
//     resp.write('aksdkskd');
//     resp.end();

// }
// http.createServer(fum).listen(4000);


// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify(Data.data));
//  resp.end();
// }).listen(5001);
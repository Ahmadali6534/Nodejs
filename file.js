const fs = require('fs')
const http = require('http');
const Data = require('./Data');
const path = require('path')
// ARRAY CONDITION LOGIC========================================================


// var a = 10;
// var b= 50;
// if(a>b){
//     console.log('a is greather')
// }
// else{
//     console.log('b is greather')
// }
// for(b=1;b<=10;b++){
//     console.log(b)
// }
// const array = [0,1,2,4,10,69]
// console.log(array[4])
// const arr = array.filter((item)=>{
//     return item>4
// })

// console.log(arr)



// CREATE SERVER ==========================================================================

// http.createServer((req,resp)=>{
//     resp.write('<h1>Helloo</h1>');
//     resp.end();

// }
// ).listen(4000);


// create server with function ===============================================================================================

// const serverrr = (req,resp)=>{
//     resp.write('<h1>helllo two</h1>');
//     resp.end();
// }

// http.createServer(serverrr).listen(4001);



// CREATE SIMPLE API================================================================

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'Application/json'});
//     resp.write(JSON.stringify(Data.data));
//     resp.end();
// }).listen(4003)


// INPUT COMMAND LINE ====================================================================


const input = process.argv
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log('invalid')
}


// Show file list ===============================================

const dirpath = path.join(__dirname,'src')
console.log(dirpath)
for(i=1;i<=5;i++){
    fs.writeFileSync(`${dirpath}/fileee${i}.js`,'file value')
}
fs.readdir(dirpath,(err,file)=>{
    file.forEach((item)=>{
        console.log(item)
    })
})


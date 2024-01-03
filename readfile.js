// // // const fs = require('fs')
// // // const path = require('path')
// // // const dirpath = path.join(__dirname,'file')
// // // const filepath = `${dirpath}/apple.js`
// // // fs.writeFileSync(filepath,'helooo world')


// // // // READ FILE

// // // fs.readFile(filepath,'utf8',(err,item)=>{
// // //     console.log(item)
// // // })

// // // // UPDATE FILE

// // // fs.appendFile(filepath,'helo pakistan',(err)=>{
// // //     if(err){
// // //         console.log('err id genrated')
// // //     }
// // //     else{
// // //         console.log('file is updated')
// // //     }
// // // })

// // // // RENAME FILE

// // // fs.rename(filepath,`${dirpath}/fruit.js`,(err)=>{
// // //     if(err){
// // //         console.log('errr found')
// // //     }
// // //     else{
// // //         console.log('name is updated')
// // //     }
// // // })


// // // let a = 10
// // // let b = 0 

// // //


// // console.log('first')
// // setTimeout(()=>{
// //     console.log('second')
// // },2000)
// // setTimeout(()=>{
// //     console.log('third')
// // },0)
// // console.log('four')

// const fs = require('fs')
// const path = require('path')
// const dirpath = path.join(__dirname,'file')
// const filepath = `${dirpath}/apletwo.js`
// fs.writeFileSync(filepath,'helo')



// fs.appendFile(filepath,'pakistan',(err)=>{
//     if(!err){
//         console.log('updated')
//     }
// })

// fs.readFile(filepath,'utf8',(err,item)=>{
   
//         console.log(item)
 
// })

// fs.rename(filepath,`${dirpath}/aplethree.js`,(err,item)=>{
//     if(!err){
// console.log('name updated')
//     }
// })



// let a = 10
// let b = 30
// console.log(a+b)
// setTimeout(()=>{
//  b= 30
//  console.log(a+b)
// },2000)


// let a = 10
// let b = 0
// const waitingdata= new Promise((item,resolve)=>{
//        setTimeout(()=>{
//            item(30)
//          },3000)
//      })
    
//     waitingdata.then((data)=>{
//          console.log(a+data)
//  })

console.log('first')

setTimeout(()=>{
    console.log("second")
},2000)

setTimeout(()=>{
    console.log("three")
},0)

console.log("four")
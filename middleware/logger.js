/*
const fs=require('fs')
const fspromises=require('fs').promises
const path=require('path')
const {format}=require('date-fns')
const {v4:uuid}=require('uuid')

 const logfilemaker= async (message,logFileName) =>{
const dateLog=`${format(new Date(),'yyyymmdd\tHH:mm:ss')}`
const logItem=`${dateLog}\t${uuid()}\t${message}\n`



try{
    if(!fs.existsSync(path.join(__dirname,"..",'logs')))
    await fspromises.mkdir(path.join(__dirname,'..','logs'))

    await fspromises.appendFile(path.join(__dirname,'..','logs',logFileName),logItem)
}
catch(error){
    console.log(error)
}

}

const middleLogger=(req,res,next)=>{
logfilemaker(`${req.method}\t${req.url}\t${req.headers.origin}`,'reqLog.log')
console.log( `${req.method} ${req.path}`)
next()

}





module.exports={middleLogger,logfilemaker}

*/
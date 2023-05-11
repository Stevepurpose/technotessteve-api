const {logfilemaker}= require ('./logger')

const errorHandler=(err,req,res,next)=>{
    logfilemaker(`${err.name}: ${err.messsage}\t${req.method}\t${req.url}\t${req.headers.origin}`,'errLog.log')
    //code not working
    console.log( "error",err.stack) 
   
    const status=res.statusCode?res.statusCode:500
    res.status(status)
    res.json({message:err.message})
    
}

 module.exports={errorHandler}

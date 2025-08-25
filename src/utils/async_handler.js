export {async_handler}

const async_handler=(fn)=> async(req,res,next)=>{
try{
    await fn(req,res,next)

}catch(error){
    res.status(error.code||500).json({
        sucess:true,
        message:error.message
    })
}
}
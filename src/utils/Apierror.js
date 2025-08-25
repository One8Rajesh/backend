class Apierror extends Error{
    constructor(
        statuscode,
        message="Something went wrong",
        errors=[],
        statck=""

    ){
        super(message)
        this.statusCode=statusCode
        this.data=NULL
        this.message=message
        this.sucess=false
        this.errors=errors

        if(statck){
            this.stack=statck
        }
        else{
            this.captureStackTrace(this,this.constructor)
        }
    }
}
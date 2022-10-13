const ErrorMsg = (props)=>{
    let msg = props.msg;
    return(
        <div className="error"> 
            {msg}
        </div>
    )
}
export default ErrorMsg;
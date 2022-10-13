const SuccessMsg = (props)=>{
    let msg = props.msg;
    return(
        <div className="success"> 
            {msg}
        </div>
    )
}
export default SuccessMsg;
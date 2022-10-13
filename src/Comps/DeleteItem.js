import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import SuccessMsg from "./SuccessMsg";
const DeleteItem = ()=>{
    const {id} = useParams();
    const hist = useHistory();
    const url = 'https://63342852433198e79dd14ed8.mockapi.io/inv/'+id;
    const [errMsg, setErrMsg] = useState('');
    fetch(url, {method: 'DELETE'})
    .then( (res)=>{
        hist.push('/');
    })
    .catch((err)=>{
        setErrMsg(err.message);
        console.log(err);
    })

    return (
        <div>

            {errMsg && <ErrorMsg msg={errMsg} />}
        </div>
        
    ) 

}
export default DeleteItem;
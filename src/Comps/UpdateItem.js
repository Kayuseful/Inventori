import { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';
import SuccessMsg from './SuccessMsg';


function UpdateItem(){
    const {id} = useParams();
    const url = 'https://63342852433198e79dd14ed8.mockapi.io/inv/'+id;
    let [errMsg, setErrMsg] = useState('');
    let [successMsg, setSuccessMsg] = useState('');
    const [isPending, setIsPending] = useState(true);
    
    let d = new Date();
    const today = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+ d.getDate();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState(today);

    useEffect( 
        ()=>{
            const controller = new AbortController();
            fetch(url, {signal: controller.signal})
                .then(res=>res.json())
                .then(data=>{
                    setName(data.name);
                    setDesc(data.desc);
                    setDate(data.date);
                    setIsPending(false); 
                    console.log(data)
                })
                .catch(err=>{
                    if(err.name==='Abort Error'){
                        setErrMsg(err.message); setIsPending(false); return;
                    }else{
                        setErrMsg(err.message);
                        setIsPending(false);
                        console.log(err);
                    }
                })
                return ()=>controller.abort;
        },
    [url])

 


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        
        const url = 'https://63342852433198e79dd14ed8.mockapi.io/inv/'+id;
        setIsPending(true);
        fetch(url, {
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name, desc, date})
        })
        .then(res=>{console.log(res);
            if(!res.ok){
                setErrMsg(res.statusText);
                setIsPending(false);
                throw Error(res.statusText);
            }
            return res.json()
        })
        .then(res=>{
            console.log(res); 
            setSuccessMsg('Success updating ['+res.name+']');
            setIsPending(false);
            setErrMsg('');
           
            
        })
        .catch(err=>{
            setErrMsg(err.message);
            setSuccessMsg('');
            setIsPending(false);
            console.log(err);
        })


        
    }

    return (
        <div className="create-item">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2>Edit Item - {name}</h2>
                {errMsg && <ErrorMsg msg={errMsg} />}
                {successMsg && <SuccessMsg msg={successMsg} />}
                {successMsg && <Link to="/" className='back'> &larr; Back</Link>}
                <div className="form-control">
                    <label>Name</label>
                    <input required name="name" value={name} 
                    onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Description</label>
                    <textarea name="desc" value={desc}
                    onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Date Added</label>
                    <input type="date" name="date" value={date}
                    onChange={(e)=>setDate(e.target.value)}/>
                </div>

                <div className="form-control">
                    {isPending ? <button disabled>Updating...</button> : <button >Update</button>}
                        
                </div>
                
            </form>
        </div>
    )
}
export default UpdateItem;
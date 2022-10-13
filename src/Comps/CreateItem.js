import { useState} from 'react';
import ErrorMsg from './ErrorMsg';
import SuccessMsg from './SuccessMsg';

function CreateItem(){
    let d = new Date();
    const today = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+ d.getDate();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState(today);

    let [isPending, setIsPending] = useState(false);
    let [errMsg, setErrMsg] = useState(''); 
    let [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const url = 'https://63342852433198e79dd14ed8.mockapi.io/inv'
        setIsPending(true);
        fetch(url, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name, desc, date})
        })
        .then(res=>{
            if(res.ok){
                setSuccessMsg(res.statusText+': Success adding ['+name+']');
                setName('');
                setDate(today);
                setDesc('');
                setIsPending(false);
                
            }
            console.log(res); setErrMsg('');
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
                <h2>Add Item to Store</h2>
                {errMsg && <ErrorMsg msg={errMsg} />}
                {successMsg && <SuccessMsg msg={successMsg} />}
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
                    {isPending ? <button disabled>Adding...</button> : <button >Add</button>}
                        
                </div>
                
            </form>
        </div>
    )
}
export default CreateItem;
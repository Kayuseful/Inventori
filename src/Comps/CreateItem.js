import { useState, useRef} from 'react';
import ErrorMsg from './ErrorMsg';
import SuccessMsg from './SuccessMsg';

function CreateItem(){
    let d = new Date();
    const today = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+ d.getDate();
    
    const nameref = useRef('');
    const descref = useRef('');
    const dateref = useRef(today);

    let [isPending, setIsPending] = useState(false);
    let [errMsg, setErrMsg] = useState(''); 
    let [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = nameref.current.value;
        const desc = descref.current.value;
        const date = dateref.current.value;
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
                nameref.current.value='';
                descref.current.value='';
                dateref.current.value=today;
                setIsPending(false);
            }
            //console.log(res); 
            setErrMsg('');
        })
        .catch(err=>{
            setErrMsg(err.message);
            setSuccessMsg('');
            setIsPending(false);
            //console.log(err);
        })

    }

    return (
        <div className="create-item">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2>Add Item to Store</h2>
                {errMsg && <ErrorMsg msg={errMsg} />}
                {successMsg && <SuccessMsg msg={successMsg} />}
                <div className="form-control">
                    <label htmlFor='name'>Item Name</label>
                    <input required name="name" ref={nameref} />
                </div>
                <div className="form-control">
                    <label htmlFor='desc'>Description</label>
                    <textarea name="desc" ref={descref} />
                </div>
                <div className="form-control">
                    <label htmlFor='date'>Date Added</label>
                    <input type="date" name="date" defaultValue={today}
                    ref={dateref} />
                </div>

                <div className="form-control">
                    {isPending ? <button disabled>Adding...</button> : <button >Add</button>}
                        
                </div>
                
            </form>
        </div>
    )
}
export default CreateItem;
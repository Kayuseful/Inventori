import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';
function Main(){
    const url = 'https://63342852433198e79dd14ed8.mockapi.io/inv';
    const [items, setItems] = useState([{'name':'dummy', 'desc':'', 'date':'','id':0}]);
    const [errMsg, setErrMsg] = useState('');
    const [isPending, setIsPending] = useState(true);


    useEffect( 
        ()=>{
            const controller = new AbortController();
            fetch(url, {signal: controller.signal})
                .then(res=>res.json())
                .then(data=>{
                    setItems(data);
                    setIsPending(false); 
                    //console.log(data)
                })
                .catch(err=>{
                    if(err.name==='Abort Error'){
                        setErrMsg(err.message); setIsPending(false); return;
                    }else{
                        setErrMsg(err.message);
                        setIsPending(false);
                        //console.log(err);
                    }
                })
                return ()=>controller.abort;
        },
    [])

    return(
        <div className="main">
            <h2>Items in store</h2>
            {isPending && <Loading /> }
            <h3> {errMsg} </h3>
            <table>
                <thead>
                    <tr>
                        <th style={{'width':'5%'}}>ID</th>
                        <th style={{'width':'25%'}}>Name</th>
                        <th style={{'width':'35%'}}>Description</th>
                        <th style={{'width':'15%'}}>Date</th>
                        <th style={{'width':'5%'}}>Edit</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, i)=>{
                            return (
                                <tr key={item.id} id={"row_"+item.id}>
                                    <td className='center'>{i+1}</td>
                                    <td> {item.name} </td>
                                    <td> {item.desc} </td>
                                    <td> {item.date} </td>
                                    <td className='center'>
                                    <Link to={"/UpdateItem/"+item.id}><span className="material-icons md-24">edit</span></Link>
                                    </td>
                                    <td className='center'>
                                        <Link to={"/DeleteItem/"+item.id}><span className="material-icons md-24">
delete</span></Link>    
                                    </td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem numquam rem voluptas commodi beatae, nesciunt ea aut odio quos natus id officiis fugiat non ratione, rerum vel quaerat aliquid.
                Corporis ipsum beatae amet hic. Maiores delectus expedita, maxime totam, sunt quam quos dolore, deleniti accusantium officiis unde itaque vitae ut exercitationem accusamus! Maxime, dicta veniam ullam veritatis rem culpa!
                Pariatur minima magni sit sapiente et debitis labore nesciunt fugit quasi quisquam beatae, totam repellendus, aspernatur tempora nobis, voluptas impedit eligendi voluptatum? Id natus quae ea ratione, quos ipsam officiis.
            </p>

        </div>
    )
}
export default Main;
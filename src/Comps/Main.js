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
    [])

    return(
        <div className="main">
            <h2>Items in store</h2>
            {isPending && <Loading /> }
            <h3> {errMsg} </h3>
            <table>
                <thead>
                    <tr>
                        <td style={{'width':'5%'}}>ID</td>
                        <td style={{'width':'25%'}}>Name</td>
                        <td style={{'width':'25%'}}>Description</td>
                        <td style={{'width':'15%'}}>Date</td>
                        <td style={{'width':'15%'}}>Edit</td>
                        <td>Del</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, i)=>{
                            return (
                                <tr key={item.id} id={"row_"+item.id}>
                                    <td>{i+1}</td>
                                    <td> {item.name} </td>
                                    <td> {item.desc} </td>
                                    <td> {item.date} </td>
                                    <td>
                                    <Link to={"/UpdateItem/"+item.id}>Edit</Link>
                                    </td>
                                    <td>
                                        <Link to={"/DeleteItem/"+item.id}>Delete</Link>    
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
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore cupiditate quibusdam dolorem illo, eos eum minima accusamus laboriosam quisquam vero aut eveniet? Nesciunt cumque quos quam quasi maxime provident?
                Optio nesciunt ex quam minima. Suscipit impedit minus id omnis incidunt, officiis fugit consectetur voluptatibus doloremque reprehenderit modi porro, excepturi perferendis libero consequuntur eligendi sit quas nobis? Odio, hic quam.
                Aspernatur quas esse nostrum dicta excepturi necessitatibus quos nesciunt harum quibusdam molestiae, suscipit pariatur exercitationem officia maxime nihil perferendis corrupti rerum vitae optio totam accusamus. Architecto rerum est rem alias.
                Alias ipsum suscipit at ea, laudantium rerum architecto laborum minus numquam ullam, iste ab porro in voluptates omnis cupiditate quos beatae dolorum! Alias omnis, hic ea praesentium quisquam facilis enim.
            </p>
        </div>
    )
}
export default Main;
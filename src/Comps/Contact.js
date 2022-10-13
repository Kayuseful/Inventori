import {useRef} from 'react';
function Contact(){
    const fName = useRef('');
    const lName = useRef('M');
    
    const handleForm = (e)=>{
        e.preventDefault();
        console.log(fName.current);
    }
    return (
        <>
        <form onSubmit={(e)=>handleForm(e)}>
            <div className="form-control">
                <input ref={fName} name="fName" placeholder="First name" />
                <input ref={lName} name="lName" placeholder="Lasst name" />
                <input type="submit" value="Show" />
            </div>
        </form>
        </>
    )
}
export default Contact;
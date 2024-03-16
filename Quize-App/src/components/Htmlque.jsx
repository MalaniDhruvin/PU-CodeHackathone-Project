import './Htmlque.css'
import Questions from './Questions';
import { html } from '../quiz';
const Que=()=>{
    return(<>
        <div className='htmlque'>
        {html.map((item)=><Questions data={item}></Questions>)}
        </div>
        <div className='btn'>
        <button className='submit-btn'>submit</button>
        </div>
        
    </>)
}

export default Que;
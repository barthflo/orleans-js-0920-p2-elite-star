import {FiArrowUp} from 'react-icons/fi';
import './BackToTop.css';


const BackToTop = () => {
    return (
        <div type="button" className="back-top btn mx-1 p-1" onClick = {() => window.scrollTo({top:0, behavior:"smooth"})}>
            <FiArrowUp className="button-top" />
        </div>
    )
}

export default BackToTop;
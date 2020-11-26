import './AboutText.css';
import {Fade} from 'react-reveal';

const AboutText = () => {
    return (
        <div id="locationAbout" className="col-12 px-md-0">
            <Fade bottom duration={1000}>
                <h2 className='about-title'>OUR AGENCIES</h2>
            </Fade>
            <div className='about-text my-md-5'>
                <div className='about-adress1 mb-5 mt-1 mt-md-0 mb-md-0'>
                    <h3 className='location'>ALDERAAN</h3>
                    <p>Level 7, Anvil House 138</p>
                    <p>Walkefield Street Floreltiaan, AL</p>
                    <p>Alderaan - Galactic Republic</p>
                    <p>T: 0679497610</p>
                    <p>F: 0679497611</p>
                    <p>E: elitestar@force.al</p>
                </div>
                <div className='about-adress2'>
                    <h3 className='location'>CORUSCANT</h3>
                    <p>Keizersgracht 174-11016 DW</p>
                    <p>Sor-Akai Coruscan</p>
                    <p>Coruscant - Galactic Empire</p>
                    <p>T: 0679497610</p>
                    <p>F: 0679497611</p>
                    <p>E: elitestar@dark.rep</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutText;
import './AboutText.css';
import {Fade} from 'react-reveal';

const AboutText = () => {
    return (
        <div id="locationAbout">
            <Fade bottom duration={1000}>
                <h2 className='about-title'>OUR AGENCIES</h2>
            </Fade>
            <div className='about-text'>
                <div className='about-adress1'>
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
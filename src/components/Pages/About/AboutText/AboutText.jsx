import './AboutText.css';
import {Fade} from 'react-reveal';

const AboutText = () => {
    return (
        <div>
            <Fade bottom duration={1000}>
                <h2 className='about-title'>Our Agencies</h2>
            </Fade>
            <div className='about-text'>
                <div className='about-adress1'>
                    <p className='location'>ALDERAAN</p>
                    <p>Level 7, Anvil House 138</p>
                    <p>Walkefield Street Floreltiaan, AL</p>
                    <p>Alderaan - Galactic Republic</p>
                    <p>T: 0679497610</p>
                    <p>F: 0679497611</p>
                    <p>E: elitestar@force.al</p>
                </div>
                <div className='about-adress2'>
                    <p className='location'>CORUSCANT</p>
                    <p>Keizersgracht 174-11016 DW</p>
                    <p>Sor-Akai Coruscan</p>
                    <p>Coruscant - Galactic Empire</p>
                    <p>T: 0679497610</p>
                    <p>F: 0679497611</p>
                    <p>E: elitestar@dark.rep</p>
                </div>
            </div>
            <div className='description'>
                <p className='desc-title'>EliteStar was created to meet two objectives :</p>
                <p>- Represent models whose physical profiles may or may not correspond to the usual criteria of modeling agencies.</p>
                <p>- Allow event professionals to find the characters they need, namely profiles that are increasingly out of the ordinary and atypical.</p>
                <p>EliteStar agency is a member of the Intergalactic Federation of Modeling Agencies.</p>
            </div>
        </div>
    )
}

export default AboutText;
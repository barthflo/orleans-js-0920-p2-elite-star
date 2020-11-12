import './About.css';
import Faq from './Faq/Faq';

function About() {
    return (
        <div className="about d-flex flex-column">
            {/* <div className='about-mask'></div> */}
                <h2 className='about-title'>ABOUT US</h2>
            <div className='about-text'>
                <div className='about-adress'>
                    <h4>ELITE STAR AGENCY</h4>
                    <h5>Coruscant / Alderaan</h5>
                    <p>Keizersgracht 174-11016 DW</p> 
                    <p>Sor-Akai Coruscan</p>
                    <p>Coruscant - Galactic Empire</p>
                    <p>T: 0679497610</p>
                    <p>F: 0679497611</p>
                    <p>E: elitestar@dark.rep</p>
                </div>
                <div className='description'>
                    <p className='desc-title'>EliteStar was created to meet two objectives :</p>
                    <p>- Represent models whose physical profiles may or may not correspond to the usual criteria of modeling agencies.</p>
                    <p>- Allow event professionals to find the characters they need, namely profiles that are increasingly out of the ordinary and atypical.</p>
                    <p>EliteStar agency is a member of the Intergalactic Federation of Modeling Agencies.</p>
                </div>
            </div>
            <Faq />
        </div>
    )
}

export default About;

import './About.css';
import AboutForm from '../About/Aboutform/AboutForm';
import Faq from './Faq/Faq';
import Map from '../../../assets/map.png';
import { TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';
import {Fade} from 'react-reveal';
import AboutText from './AboutText/AboutText';


function About() {
    return (
            
        <main className="about col-12 col-lg-10 offset-lg-1 px-0 py-md-5 px-md-4">
            {/* <Fade bottom duration={1000}>
                <h1 className='about-title'>Elite Star Agencies</h1>
            </Fade>
            <div className='about-text d-flex justify-content-between'>
                <div className='about-adress'>
                    <p className='elite'>ELITE STAR AGENCY</p>
                    <p className='coruscant'>Coruscant / Alderaan</p>
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
            </div>  */}
            <AboutText />
            <div className="d-flex flex-column-reverse flex-md-row">
                <AboutForm />
                <div className="col-12 col-md-6 col-lg-5 mb-4">
                    <Fade bottom duration={1000}>
                        <h2 className="mb-4">WHERE TO FIND US</h2>
                    </Fade>
                    <TransformWrapper >
                        <TransformComponent >
                            <img className="map" src={Map} alt="map"/>
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>  
            <Faq /> 
            
        </main>
    )
}

export default About;

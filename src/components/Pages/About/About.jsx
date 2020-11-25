import './About.css';
import AboutForm from '../About/Aboutform/AboutForm';
import Faq from './Faq/Faq';
import Map from '../../../assets/map.png';
import { TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';
import {Fade} from 'react-reveal';
import AboutText from './AboutText/AboutText';
import AboutIntro from './AboutIntro/AboutIntro';


function About() {
    return (
            
        <main className="about col-12 col-lg-10 offset-lg-1 px-0 py-md-5 px-md-4">
            
            <AboutIntro />

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

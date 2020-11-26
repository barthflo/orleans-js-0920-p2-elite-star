import './AboutIntro.css';
import { Fade } from 'react-reveal';
import GLucas from '../../../../assets/GeorgeLucas.jpg';
import darthvader from '../../../../assets/models/darthVader.jpg';
import jedi from '../../../../assets/models/jediRainbow.jpg';
import robots from '../../../../assets/models/robots.jpg';
import stormtrooper from '../../../../assets/models/stormTrooper.jpg';

const AboutIntro = () => {
    return (
        <section id="IntroAbout">
            <Fade bottom duration={1000}>
                    <h1 className="text-capitalize">Who are we ?</h1>
            </Fade>
            <div  className="aboutIntro col-12 px-md-0">
                <div className="ceoSection">
                    <img src={GLucas} alt="CEO of EliteStar" />
                    <div className="ceoText p-3 pl-md-5">
                        <p>' A big agency with big ambitions, this is how it all started. A risky association between the dark side and resistance but with the common goal of promoting the beauty of species from the entire universe! A huge challenge but not yet finished. We need you to increase the speed of beauty! '</p>
                        <p>- George Lucas CEO of EliteStar -</p>
                    </div>
                </div>
                <div className='description'>
                    <h2 className='desc-title mb-5'>EliteStar was created to meet two objectives :</h2>
                    <div className="p-3 px-md-5">
                        <p>- Represent models whose physical profiles may or may not correspond to the usual criteria of modeling agencies.</p>
                        <p>- Allow event professionals to find the model(s) they need, namely profiles that are increasingly out of the ordinary and atypical.</p>
                        <p>EliteStar agency is a member of the Intergalactic Federation of Modeling Agencies.</p>
                    </div>
                </div>
                <div className="firstPartner mb-5">
                    <h2 id="thankText" className="text-capitalize pl-3 pl-md-0 mb-5"> A Special Thanks to our first partners :</h2>
                    <div className="imgPartner">
                        <div className="pictureP">
                            <img src={darthvader} alt="first partner" />
                            <p>Darth Vader</p>
                        </div>
                        <div className="pictureP">
                            <img src={robots} alt="first partner" />
                            <p>C2PO and R2D2</p>
                        </div>
                    </div>
                    <div className="imgPartner">
                        <div className="pictureP">
                            <img src={stormtrooper} alt="first partner" />
                            <p>StormTrooper n°21565</p>
                        </div>
                        <div className="pictureP">
                            <img src={jedi} alt="first partner" />
                            <p>Luke Skywalker</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro;
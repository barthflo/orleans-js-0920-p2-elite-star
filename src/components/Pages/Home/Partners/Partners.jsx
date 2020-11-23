import { Slide } from 'react-reveal';
import DarthVader from '../../../../assets/partners/darthvader.png';
import Jabba from '../../../../assets/partners/jabba.png';
import Jedi from '../../../../assets/partners/jedi.png';
import KyloRen from '../../../../assets/partners/kyloren.png';
import Palpatine from '../../../../assets/partners/palpatine.png';
import SkyWalker from '../../../../assets/partners/skywalker.png';





const Partners = () => {
    return (
        <section className="Partners d-flex flex-column col-12 col-md-10 offset-md-1 my-5">
            <Slide bottom>
            <h2>Our Partners</h2>
            </Slide>
            <Slide bottom cascade>
            <div className="d-flex flex-wrap mt-3">
                <div className="col-12 col-sm-6 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-around flex-wrap">
                    <figure><img src={DarthVader} alt="Vader"/></figure>
                    <figure><img src={Jabba} alt="Jabba"/></figure>
                    <figure><img src={Jedi} alt="Jedi"/></figure>
                </div>
                <div className="col-12 col-sm-6 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-around flex-wrap">
                    <figure><img src={KyloRen} alt="Kylo"/></figure>
                    <figure><img src={Palpatine} alt="Palpatine"/></figure>
                    <figure><img src={SkyWalker} alt="Skywalker"/></figure>
                </div>
            </div>
            </Slide>
        </section>
    )
}

export default Partners

import './About.css';

import AboutForm from '../About/Aboutform/AboutForm';

import Faq from './Faq/Faq';


function About() {
    return (
        <div className="about d-flex justify-content-center align-items-center">
            
            <AboutForm />
            <Faq />
        </div>
    )
}

export default About;

import React, { useState } from 'react';
import './Faq.css';
import {Fade} from 'react-reveal';


function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: 'How can I become a model for one of the agencies represented on the merchandise?',
      answer: 'To apply to become a model, please visit the respective agency’s website and follow the submission process outlined on their website. See our Contact page for our agency website links.',
      open: false
    },
    {
      question: 'How can I enter the Elite Model Look contest?',
      answer: 'Please click here and follow the submission process outlined on the Elite Model Look website. ',
      open: false
    },
    {
      question: 'Will purchasing an agency merchandise item improve my chances of being scouted?',
      answer: 'No, agency merchandise is independent from the scouting process for each agency. ',
      open: false
    },
    {
      question: 'If I have a problem with my order, who can I contact to resolve any issues?',
      answer: 'Please contact us with your order number and clearly explain the issue, a representative will work with you to resolve the issue. ',
      open: false
    }
  ]);

  const toggleFaq = index => {
    setFaqs(faqs.map((faq, i) =>{
      if (i === index ) {faq.open = !faq.open} else {faq.open = false}
      return faq;
    }))
  };

  return (
    <section id="faq" className="mb-5 mb-md-0 col-12">
      <Fade bottom duration={1000}>
        <h2>F.A.Q</h2>
      </Fade>
      <div className="faqs mt-3 md-mt-0 pt-md-0">
      {faqs.map((faq, index,) =>
        <div className={"pl-md-0 faq col-12 col-md-6" + (faq.open ? ' open' : '')}
          key={index}
          onClick={() => toggleFaq(index)}>
          <div className="faq-question">
            <p>{faq.question}</p>
          </div>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>)}
      </div>
    </section>


  )
}
export default Faq;


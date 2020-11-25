
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AboutForm.css';
import {Fade} from 'react-reveal';

export default function AboutForm() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [message, setMessage] = useState("");

    const { register, handleSubmit, errors, formState } = useForm();
    const { isSubmitSuccessful } = formState;
    const onSubmit = (data, e) => {
        localStorage.setItem('aboutForm', JSON.stringify(isSubmitSuccessful));
        e.target.reset(data);
    }

    return (
        <section id="contact" className=" about-form col-12 col-md-6 col-lg-7 mb-4">
            <Fade bottom duration={1000}>
                <h2 className="contactUs text-uppercase mb-4">Contact us</h2>    
            </Fade>
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input name="firstName" type="text" className="form-control" id="FirstName"
                            ref={register({ required: true, minLength: 2 })}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="John" />
                        {errors.firstName && <span><small className="text-danger">First name must be at least 2 characters long</small></span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSecondName">Last Name</label>
                        <input name="secondName" type="text" className="form-control" id="secondName"
                            ref={register({ required: true, minLength: 2 })}
                            placeholder="Smith"
                            onChange={(e) => setSecondName(e.target.value)} />
                        {errors.secondName && <span><small className="text-danger">Second name must be at least 2 characters long</small></span>}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" className="form-control" id="email"
                            message="Invalid email"
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }
                            })} onChange={(e) => setEmail(e.target.value)}
                            placeholder="johnsmith@wild.com" />
                        {errors.email && <span><small className="text-danger">Invalid email</small></span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="city">Galactic Zone</label>
                        <select
                            name="city"
                            className="form-control"
                            id="city"
                            placeholder="your Galactic Zone"

                            ref={register({
                                required: true,
                                validate: value => value !== "Choose your zone"
                            })}
                            onChange={(e) => setCity(e.target.value)}
                            defaultValue="Choose your zone">
                            <option disabled>Choose your zone</option>
                            <option value="Dark side">Tatooine</option>
                            <option value="Loyal side">Coruscant</option>
                            <option value="Wild side">Alderaan</option>
                            <option value="Eath">Earth</option>
                            <option value="Gotham">Naboo</option>
                            <option value="Gotham">Other</option>
                        </select>
                        {errors.city && <span><small className="text-danger">Choose your zone</small></span>}
                    </div>
                    
                        <div className="mb-3 form-group col-12">
                        <label htmlFor="message">Message</label>
                            <textarea className="form-control " id="message" name="message" type="text" 
                            ref={register({ required: true, minLength: 3, maxLength: 500 })}
                            placeholder="Write here..."
                            onChange={(e) => setMessage(e.target.value)}></textarea>
                            {errors.message && <span><small className="text-danger">Your message cannot be empty</small></span>}
                        </div>
                        
                       
                </div>
                <button className="submit btn btn-dark text-uppercase">Send message</button>
                {isSubmitSuccessful && <span className="text-success"><small className="p-3">Your message has been sent successfully !</small></span>}
            </form>
        </section>
    )
}


import './ProfileForm.css';
import {Slide} from 'react-reveal';
import {useForm} from 'react-hook-form';

function ProfileForm({openForm, model}) {
    const {register, handleSubmit, errors , formState} =useForm();
    const {isSubmitSuccessful} = formState;
    const onSubmit = (data, e) => {
        localStorage.setItem('profileForm', JSON.stringify(isSubmitSuccessful));
        e.target.reset();
    }
    return (
        <div className="d-flex flex-wrap flex-md-nowrap mt-4 w-100">
            <Slide left duration={500}>
            <form 
                id="contact"
                className="profile-form col-12 px-md-0 mb-5"
                onSubmit={handleSubmit(onSubmit)} 
                >
                <h3 className="mb-5">Contact {model[0].name}</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        ref={register({required :true, minLength:3})}
                        className="form-control" 
                        id="name"
                        name="name"
                        placeholder="Your name"/>
                        {errors.name &&
                            <span>
                                <small className="text-danger">Name must be at least 3 characters long.</small>
                            </span>
                        }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        ref={register({
                            required :"Required", 
                            pattern:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                        className="form-control" 
                        id="email"
                        name="email"
                        placeholder="Your email"
                    />
                    {errors.email &&
                            <span>
                                <small className="text-danger">Invalid email address.</small>
                            </span>
                        }
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                        ref={register({
                            required :true,
                            validate : value => value !== "Choose a subject"
                            })}
                        className="form-control" 
                        id="subject" 
                        name="subject"
                        defaultValue="Choose a subject">
                            <option disabled>Choose a subject</option>
                            <option value="Commercial">Commercial/Advertisement</option>
                            <option value="Video">Cinema/Videos</option>
                            <option value="Fashion">Fashion/Photoshoot</option>
                    </select>
                    {errors.subject &&
                            <span>
                                <small className="text-danger">Please select a subject</small>
                            </span>
                        }
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        ref={register({
                            required:true,
                            })
                        }
                        className="form-control"
                        id="message"
                        name="message"
                    />
                    {errors.message &&
                        <span>
                            <small className="text-danger">Your message cannot be empty</small>
                        </span>
                    }
                </div>
                <button className="btn-dark btn-dark btn-block">
                    Send
                </button>
                {isSubmitSuccessful && <span className="text-success">Your message had been sent to {model[0].name} </span>}
            </form>
            </Slide>
        </div>
    )
}

export default ProfileForm

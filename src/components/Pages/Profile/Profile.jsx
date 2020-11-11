import './Profile.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileForm from './ProfileForm/ProfileForm';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Profile(props) {
    const params = props.match.params;
    const characters = JSON.parse(localStorage.getItem('characters'));
    const model = characters.filter(character => (character.id.toString() === params.id));
    const [openForm, setOpenForm]=useState(false);
    const next = (id) => {
        if(id=== 88){
            return '/profile/1';
        }else if(id === 16 || id===76){
            return `/profile/${id + 2}`;
        }else{
            return `/profile/${id + 1}`;
        }
    }
    const prev = (id) => {
        if(id=== 1){
            return '/profile/88';
        }else if(id === 18 || id===78){
            return `/profile/${id - 2}`;
        }else{
            return `/profile/${id - 1}`;
        }
    }
    return (
        <main className="Profile col-12 col-md-10 offset-md-1 px-0 py-md-5 dark">
            <h1 style={{background:"var(--secondary-color"}}>{model[0].name}</h1>
            <ProfileDescription 
                params={params} 
                model={model} 
                prev={prev} 
                next={next} 
                onClick={value => setOpenForm(value)} 
                openForm={openForm} 
            />
            <ProfileForm openForm={openForm} model={model}/>
            {window.innerWidth <768 &&
            <div className="col-10 offset-1 w-100 d-flex flex-row-reverse justify-content-between p-0">
                <Link className=" py-2 text-secondary" to={next(parseInt(params.id))}>Next</Link>
                <Link className=" py-2 text-secondary"to={prev(parseInt(params.id))}>Prev</Link>
            </div>
            }
        </main>
    )
}

export default Profile;

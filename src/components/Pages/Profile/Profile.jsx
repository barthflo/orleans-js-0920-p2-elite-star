import './Profile.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';

function Profile(props) {
    const params = props.match.params;
    const characters = JSON.parse(localStorage.getItem('characters'));
    const model = characters.filter(character => (character.id.toString() === params.id));  
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
            <ProfileDescription params={params} model={model} prev={prev} next={next} />
        </main>
    )
}

export default Profile;

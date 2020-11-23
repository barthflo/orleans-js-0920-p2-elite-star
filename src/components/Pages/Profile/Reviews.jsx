import './Reviews.css';
import saberLight from '../../../assets/saberResistance.png';
import saberDark from '../../../assets/saberDarkSide.png';

const Reviews = ({ side }) => {

    const userReviews = [
        {
            score: 3,
            userName: "Elle Carrillo",
            date: "12/06/2029",
            reviews: "Hardworker, listens and remembers every reviews. I recommend this model, it was a pleasure to work with! Finally I found someone in this universe how is able to understand and do what I want.",
        },
        {
            score: 5,
            userName: "Angus Boone",
            date: "04/10/2020",
            reviews: "It is rare to find someone who is very passionate but this model is the exception! I will definitely contact this model again!",
        },
        {
            score: 4,
            userName: "Lachlan Crane",
            date: "19/05/1999",
            reviews: "Amazing! This model is not scared to try anything, during our last photo shoot we had to drop ice all over the body, then set the dress on fire while the model was in space! It was a beautiful master piece and this model knew how to be the cherry on the cake!",
        },
    ]
    
    const displaySaber = (number) =>{
        for (let i = 0; i < number; i++) {
           // <img src={side ? saberDark : saberLight} alt="saber" />
            console.log("test");
        }
    }

    return (
        <div>
            {userReviews.map((user) => (
                <div>
                    <div>{displaySaber(user.score)}</div>
                    <p>{user.userName}</p>
                    <p>{user.date}</p>
                    <p>{user.reviews}</p>
                </div>
            ))}
        </div>
    )


}


export default Reviews;
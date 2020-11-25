import './Reviews.css';
import saberLight from '../../../assets/saberResistance.png';
import saberDark from '../../../assets/saberDarkSide.png';
import {Fade} from 'react-reveal';

const Reviews = ({ side }) => {
    const userReviews = [
        {
            score: 3,
            userName: "Elle Carrillo",
            date: "12/06/2020",
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
            date: "19/05/2019",
            reviews: "Amazing! This model is not scared to try anything, during our last photo shoot we had to drop ice all over the body, then set the dress on fire while the model was in space! It was a beautiful master piece and this model knew how to be the cherry on the cake!",
        },
        {
            score: 2,
            userName: "Mathilda Fonda",
            date:"05/05/2005",
            reviews:"Its work is remarkable and its passion for fashion is reflected in its poses! Always motivated, never bored, I recommand this model!",
        },
        {
            score: 5,
            userName: "Marco DeLaVita",
            date:"31/07/2002",
            reviews: "A beautiful face, a beautiful look, everything is beautiful.",
        },
        {
            score: 4,
            userName: "Riley Morgan",
            date:"31/07/2000",
            reviews: "Nice to work with, always happy and rich in creativity. Nothing is a limit, everything is possible for this model. Very impressive!",
        }
    ]

    const displaySaber = (number) => {
        let saberArray = [];
        for (let i = 0; i < number; i++) {
            saberArray.push(<img src={!side ? saberDark : saberLight} alt="saber" />)
        }
        return saberArray;
    }

    const xNbr = Math.ceil((Math.random() * userReviews.length));
    const yNbr = Math.ceil((Math.random() * userReviews.length)+1);
    
    return (
        <div className="sectionReview col-12">
            <Fade bottom duration={1000}>
                <h3>Reviews</h3>
            </Fade>
            {userReviews.slice(xNbr, yNbr).length !== 0 
            ?
            userReviews.slice(xNbr, yNbr).map((user) => (
                <div className="review">
                    <div className="d-flex flex-row-reverse align-items-baseline justify-content-between w-100">
                        <div>{displaySaber(user.score)}</div>
                        <h4>{user.userName}</h4>
                    </div>
                    <p>{user.date}</p>
                    <p id="textReview">{user.reviews}</p>
                </div>
            ))
            :
            <div style={{height:"200px"}}
                 className="no-review d-flex justify-content-center align-items-center"
            >
                <h4>No Reviews. Be the first!</h4>
            </div>
            }
        </div>
    )
}

export default Reviews;
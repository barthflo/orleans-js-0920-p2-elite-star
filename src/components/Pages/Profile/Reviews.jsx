import './Reviews.css';
import saberresistance from '../../../assets/saberResistance.png';
import saberDark from '../../../assets/saberDarkSide.png';
import {dark, light, characters} from '../../../App';

const Reviews = () => {
    

    return (
        <article>
            <div className="reviews">
                <div className="saber">
                    <img id="score" src={saberresistance} alt="model's score" />
                    <img id="score" src={saberresistance} alt="model's score" />
                    <img id="score" src={saberresistance} alt="model's score" />
                </div>
                <p>Elle Carrillo</p>
                <p>12/06/2029</p>
                <p>Review:</p>
                <div className="userReview">
                    <p>Hardworker, listens and remembers every reviews. I recommend this model, it was a pleasure to work with! Finally I found someone in this universe how is able to understand and do what I want.</p>
                </div>
            </div>
            <div className="reviews">
                <div className="saber">
                    <img id="score" src={saberresistance} alt="model's score" />
                    <img id="score" src={saberresistance} alt="model's score" />
                    <img id="score" src={saberresistance} alt="model's score" />
                    <img id="score" src={saberresistance} alt="model's score" />
                </div>
                <p>Angus Boone</p>
                <p>04/10/2020</p>
                <p>Review:</p>
                <div className="userReview">
                    <p>It is rare to find someone who is very passionate but this model is the exception! I will definitely contact this model again!</p>
                </div>
            </div>
            <div className="reviews">
                <div className="saber">
                    <img id="score" src={saberDark} alt="model's score" />
                    <img id="score" src={saberDark} alt="model's score" />
                </div>
                <p>Lachlan Crane</p>
                <p>19/05/1999</p>
                <p>review:</p>
                <div className="userReview">
                    <p>Amazing! This model is not scared to try anything, during our last photo shoot we had to drop ice all over the body, then set the dress on fire while the model was in space! It was a beautiful master piece and this model knew how to be the cherry on the cake!</p>
                </div>
            </div>
        </article>

    )
}

export default Reviews;
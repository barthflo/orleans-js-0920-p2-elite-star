import React from 'react';
import "./Articles.css";
import {Slide} from 'react-reveal';


function Articles() {
    const Jedi = {
        image: "http://braindamaged.fr/wp-content/uploads/2017/09/star-wars-8-nouvelles-images-4-247x300.jpg",
        name: "Jedi",
        pageTitle: "Jedi come back",
        cardTitle: "Find out what the French press thinks of Star Wars The Last Jedi, in theaters today.",
        tittleUnderImage: "Jedi's Army",
        date: "December 13, 2021",
        lastUpdate: "Last updated 16 hours ago",
        character: "The highly anticipated eighth installment of the Star Wars saga was released in theaters today. If the first reactions of the American media were positive, what did the French press think. Overall, this is very positive, although some media are quite nuanced on certain points. What also stands out a lot of these reviews is the quality of the work of director Rian Johnson who seems to have breathed new life into the saga and offers a nice ground for Episode 9 of J.J. Abrams. For the opinion of the brain If Abrams restored the balance in the Force (the saga) with Episode 7, it is up to Johnson - who drew elegantly in his classic SF / action to deliver Looper - to take him to a territory where the old mingles the new one, to provide the manual for the future of the movie franchise (and obviously the new post-Episode 9 trilogy it sold to Lucasfilm) in earnest. The film is also a true war film, from its opening sequence, a direct heir to heroic WWII propaganda films like the very first Star Wars in 1977. More Wars, Less Star. A war film that often leaves you speechless when faced with its crazy sense of setting and scale."
    }

    const Empire = {
        image: "http://braindamaged.fr/wp-content/uploads/2017/04/star-wars-8-les-derniers-jedi-images-2-300x179@2x.jpg",
        name: "Empire",
        pageTitle: "The Empire Strikes Back",
        cardTitle: "The Empire Strikes Back",
        tittleUnderImage: "Empire's Power",
        date: "January 23, 2022",
        lastUpdate: "Last updated 3 mins ago",
        character: "Not as good as The Empire Strikes Back, but the movie is of a quality never before seen for a Star Wars. A solid sequel, which takes daring narrative paths, perhaps too much sometimes, so many characters embark on parallel adventures at the same time. (…) It tackles more intelligent and philosophical themes than those of The Awakening of the Force, but The Last Jedi loses in fun and spontaneity. Above all, scenes worthy of the prequels - with digital everywhere - tarnish these metaphysical escapes. But, in the end, this blockbuster finds its balance and will satisfy fans of the two previous trilogies."
    }

    const Parc = {
        image: "https://thumb.canalplus.pro/http/unsafe/1900x/smart/creativemedia-image.canalplus.pro/content/0001/16/32e68a29301be785e2cdc906f43b86993dbbb5cb.png",
        name: "Parc",
        pageTitle: "For Our children",
        cardTitle: "Star Wars Parc",
        tittleUnderImage: "The New Parc",
        date: "May 24, 2022",
        lastUpdate: "Last updated 2 days ago",
        character: "Novembre 3, 2020 The first Star Wars: Galaxy's Edge park has just opened in California at Disneyland Resort. And as expected, it's a joke on the eyes and the wallets of the fans. They dreamed of it for years, Disney did. After years of work at a total cost of one billion dollars, the first space dedicated to Star Wars in a Disneyland park opened the doors of its 5.67 hectares last Friday to the lucky owners of a reservation. Because until June 23, the park will only be accessible to people who have managed to reserve a ticket (149 dollars) when it goes on sale, which sells out in less than two hours."
    }

    return (

        <div className="col-12 col-md-10 offset-md-1 bg-light text-dark">
                <div class="row">
                    <div class="col-sm mb-4">
                        <Slide bottom>
                            <h2 className="ArticleTitle">Start Wars News</h2>
                        </Slide>
                    </div>
                </div>
            <div className="card-group">
                <div className="CardComponent1 card p-3">
                    <div className="cardHeader">
                        <h3 className="text-dark">{Jedi.pageTitle}</h3>
                        <p className="text-dark">{Jedi.date}</p>
                        <p className="cinema">{Jedi.tittleUnderImage}</p>

                    </div>
                    <img src={Jedi.image} className="card-img-top p-1" alt={Jedi.name} />
                    <div className="card-body">
                        <h5 className="card-title">{Jedi.cardTitle}</h5>
                        <p className="card-text text-dark">{Jedi.character.slice(0, 500)}...</p>
                        <p className="card-text"><small className="text-muted">{Jedi.lastUpdate}</small></p>
                    </div>
                </div>
                <div class="CardComponent2 card p-3 ">
                    <div className="cardHeader">
                        <h3 className="text-dark">{Empire.pageTitle}</h3>
                        <p className="text-dark">{Empire.date}</p>
                        <p className="cinema">{Empire.tittleUnderImage}</p>

                    </div>
                    <img src={Empire.image} className="card-img-top" alt={Empire.name} />
                    <div className="card-body">
                        <h5 className="Empire card-title">{Empire.cardTitle}</h5>
                        <p className="card-text text-dark">{Empire.character.slice(0, 580)}...</p>
                        <p className="card-text"><small className="text-muted">{Empire.lastUpdate}</small></p>
                    </div>
                </div>

                <div className="CardComponent3 card p-3">
                    <div className="cardHeader">
                        <h3 className="text-dark">{Parc.pageTitle}</h3>
                        <p className="text-dark">{Parc.date}</p>
                        <p className="cinema">{Parc.tittleUnderImage}</p>

                    </div>
                    <img src={Parc.image} className="card-img-top" alt={Parc.name} />
                    <div className="card-body">
                        <h5 className="card-title">{Parc.cardTitle}</h5>
                        <p className="card-text text-dark">{Parc.character.slice(0, 700)}...</p>
                        <p className="card-text"><small class="text-muted">{Parc.lastUpdate}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles;

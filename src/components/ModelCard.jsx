import './Models.css';

const ModelCard = ({ name, image }) => {
    return (
        <div className="modelSection">
            <h3 className="modelName">{name}</h3>
            <figure>
                <img className="image" src={image} alt={name} />
            </figure>
        </div>
    )
}

export default ModelCard;
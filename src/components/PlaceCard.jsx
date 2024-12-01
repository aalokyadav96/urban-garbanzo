const PlaceCard = ({ name, image, rating, location }) => (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{location}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
  
  export default PlaceCard;
  
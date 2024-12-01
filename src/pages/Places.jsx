import PlaceCard from "../components/PlaceCard";

const Places = () => {
  const places = [
    { name: "Cafe Mocha", image: "/images/cafe.jpg", rating: 4.5, location: "Downtown" },
    { name: "Sushi Spot", image: "/images/sushi.jpg", rating: 4.8, location: "Midtown" },
  ];

  return (
    <div>
      {places.map((place, index) => (
        <PlaceCard key={index} {...place} />
      ))}
    </div>
  );
};

export default Places;

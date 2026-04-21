export default function RecipeCard({
  name,
  description,
  cookTime,
  image,
  ingredients,
  rating,
}) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h2>{name}</h2>
      <p>{description}</p> {/* 👈 THIS SHOWS THE TEXT */}
      <p>Cook Time: {cookTime}</p>
      <button>Toggle Ingredients</button>
    </div>
  );
}

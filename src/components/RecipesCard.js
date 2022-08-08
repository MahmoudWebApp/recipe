import CustomImage from "./CustomImage";

const RecipesCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="50%" alt={recipe.title} />
      <div className="recipe-card-info">
        <img src={recipe.authorImg} className="author-img" alt="chief" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a className="view-btn" href="#!">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
};

export default RecipesCard;

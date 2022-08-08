import PreviousSearches from "../components/PreviousSearches";
import RecipesCard from "../components/RecipesCard";
const Recipes = () => {
  const recipes = [
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (1).png",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Arabic chicken shawarmas",
      image: "/img/food/food (2).png",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (3).png",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (4).png",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (5).png",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (6).png",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/food/food (7).png",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/food/food (8).jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/food/food (9).jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (1).png",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (2).png",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Arabic chicken shawarma",
      image: "/img/food/food (3).png",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipesCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;

import { useEffect, useState } from "react";

const Addtofavorite = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const getLocalData = () => {
    const favorites = JSON.parse(localStorage.getItem("favorite")) || [];

    const item = favorites.find((item) => item.idMeal === recipe.idMeal);

    return {
      item,
      favorites,
    };
  };

  const addFavorite = (favorites) => {
    const update = [...favorites, recipe];
    localStorage.setItem("favorite", JSON.stringify(update));
    setIsFavorite(true);
  };

  const removeFavorite = (favorites) => {
    const update = favorites.filter((meal) => {
      return meal.idMeal !== recipe.idMeal;
    });
    localStorage.setItem("favorite", JSON.stringify(update));
    setIsFavorite(false);
  };

  const handleFavorite = () => {
    const { item, favorites } = getLocalData();
    console.log(favorites);

    if (item) {
      removeFavorite(favorites);
    } else {
      addFavorite(favorites);
    }
  };

  useEffect(() => {
    const { item } = getLocalData();

    if (item) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  return (
    <>
      <button onClick={handleFavorite}>
        {isFavorite ? "remove from favorites" : "add to favorites"}
      </button>
    </>
  );
};

export default Addtofavorite;

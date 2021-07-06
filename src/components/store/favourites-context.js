import { func } from "prop-types";
import { createContext, useState } from "react";
export const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFav: (meetupitem) => {},
  removeFav: (meetupid) => {},
  itemisFav: (meetupid) => {},
});
export function FavouritesContextProvider(props) {
  const [userFavs, setUserFavs] = useState([]);
  function addFavHandler(favmeetup) {
    setUserFavs((prevFav) => {
      return prevFav.concat(favmeetup);
    });
  }
  function removeFavHandler(meetupid) {
    setUserFavs((prev) => {
      return prev.filter((meetup) => meetup.id != meetupid);
    });
  }
  function itemisFavHandler(meetupid) {
    return userFavs.some((meetup) => meetup.id === meetupid);
  }
 const context = {
    favourites: userFavs,
    totalFavourites: userFavs.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemisFav: itemisFavHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

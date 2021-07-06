import React from "react";
import { Card } from "../ui/Card";
import "./MeetupItem.css";
import { useContext } from "react";
import { FavouriteContext } from "../store/favourites-context";
export const MeetupItem = (props) => {
  const Fav_context = useContext(FavouriteContext);
  const itemisFav = Fav_context.itemisFav(props.id);

  function toggleFavorites() {
    if (itemisFav) {
      Fav_context.removeFav(props.id);
    } else {
      Fav_context.addFav({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  }
  return (
    <div className="items">
      <Card>
        <h3 className="title">{props.title}</h3>
        <div className="image">
          <img src={props.image} />
        </div>
        <div>{props.address}</div>
        <div>{props.description}</div>
        <div>
          <button className="btn btn-primary" onClick={toggleFavorites}>
            {itemisFav ? "Remove" : "ToFavorites"}
          </button>
        </div>
      </Card>
    </div>
  );
};

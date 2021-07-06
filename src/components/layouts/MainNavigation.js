import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation_style.css";
import { FavouriteContext } from "../store/favourites-context";
export const MainNavigation = () => {
  const facv_ctx = useContext(FavouriteContext);
  return (
    <div>
      <header className="headers">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="">All Meetups</Link>
              </li>
              <li>
                <Link to="/add">New Meetup</Link>
              </li>
              <li>
                <Link to="/favorite">
                  Favorites
                  <button class="btn btn-primary">
                    <span class="badge badge-light">{facv_ctx.totalFavourites}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

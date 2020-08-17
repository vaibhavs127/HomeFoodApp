import React, { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getNameFromZomato } from "../../Services/service";
import style from "../../components/SearchForm/SearchForm.module.css";

function SearchResults() {
  const params = useLocation();
  const [results, setResult] = useState([]);

  const query = useMemo(() => {
    return new URLSearchParams(params.search).get("q");
  }, [params.search]);

  useEffect(() => {
    getNameFromZomato(query).then((docs) => {
      setResult(docs.restaurants);
    });
  }, [query]);

  return (
    <>
      <div className={style.List}>
        <div className={style.ListItemWrapper}>
          {results.map((result) => {
            const restaurant = result.restaurant;
            return (
              <Link
                to={`/hotel/${restaurant.id}`}
                className={style.ListLink}
                key={result.restaurant.id}
              >
                <div className={style.ListItem}>
                  {restaurant.featured_image && (
                    <img src={restaurant.featured_image} alt="" />
                  )}
                  <br />
                  <b>{restaurant.name}</b>
                  <br />
                  <span>Ratings: {restaurant.user_rating.rating_text}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default SearchResults;
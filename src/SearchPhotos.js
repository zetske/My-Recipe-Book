import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "csfbbQR_pN9Bix3Kr6qdJmYkawMtdyeYYWxeNlRzMMs",
});

export default function SearchPhotos() {

  const [query, setQuery] = useState(" ");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
      // console.log(json);
      setPics(json.results);
    });
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id} width="50%">
            <img
              className="card-image"
              alt={pic.alt_description}
              src={pic.urls.thumb}
              // width="100%"
              // height="100%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </>
  );
}

// const SearchPhotos = (props) => {
//   return (
//     <div className="unsplash-search">

//     </div>
//   );
// };
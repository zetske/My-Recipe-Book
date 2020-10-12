import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "csfbbQR_pN9Bix3Kr6qdJmYkawMtdyeYYWxeNlRzMMs",
});

export default function SearchPhotos(props) {

  const [query, setQuery] = useState(" ");
  const [pics, setPics] = useState([]);
  const [selectedImage, setSelectedImage] = useState('')


  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
      setPics(json.results);
    });
  };

  return (
    <>
      <div className="form"> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          id="image"
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={searchPhotos} className="btn search-button">
          Search
        </button>
      </div>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id} width="50%">
            <img
              className={`card-image ${pic.urls.regular === selectedImage ? 'selection-active' : ''}`}
              alt={pic.alt_description}
              src={pic.urls.thumb}
              onClick={() => {
                setSelectedImage(pic.urls.regular)
                props.onImageSelection(pic.urls.regular)
              }}
            />
          </div>
        ))}{" "}
      </div>
    </>
  );
}
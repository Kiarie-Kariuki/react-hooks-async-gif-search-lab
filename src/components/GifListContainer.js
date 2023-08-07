import React, {useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";


function GifListContainer() {
    const [gifs, setGifs] = useState([]);
  
    const fetchGifs = (query) => {
      
      fetch('https://api.giphy.com/v1/gifs/search?q=${query} &api_key=dc6zaTOxFJmzC&rating=g')
        .then((response) => response.json())
        .then((data) => {
          setGifs(data.data.slice(0, 3)); // Get the first 3 gifs
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };


return (
    <div>
      <GifSearch onSearch={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );

}

export default GifListContainer;
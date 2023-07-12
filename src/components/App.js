import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = `http://localhost:6001/listings`;

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setListings);
  }, []);

  const filterListings = () => {
    listings.filter((listing) => {
      return listing.description.includes(searchTerm);
    });
  };

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <div key={`listing-${listing.id}`}>
            <ListingCard listing={listing} />;
          </div>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

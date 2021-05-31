import React, { useState } from "react";

function ListingCard({Id,Description,Image,Location,deleteItem}) {
  const [like,setLike]=useState(true)

  function deletCard(e){
    e.preventDefault()
    deleteItem(Id)
  }
  return (
    <li className="card" key={Id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={Image} alt={Description} />
      </div>
      <div className="details" onClick={()=>setLike(!like)}>
        {like ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{Description}</strong>
        <span> · {Location}</span>
        <button className="emoji-button delete" onClick={deletCard}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

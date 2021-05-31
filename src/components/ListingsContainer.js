import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import Header from "./Header";

function ListingsContainer() {
  const [cards, setCards] = useState([])
  const URL = " http://localhost:6001/listings"
  useEffect(() => {
    fetch(URL, { method: 'GET' })
      .then(res => res.json())
      .then(json => setCards(json))
  }, [])

  function deleteItem(e) {
    fetch(`${URL}/${e}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        const fltrdelete = cards.filter((x) => x.id !== e)
        setCards(fltrdelete)
      })
  }

  function searchcard(e){
    const toLower=e.toLowerCase()
    const serchDescription=cards.filter((x)=> {return x.Description.toLowerCase().includes(toLower)})
    console.log(serchDescription)
  }
  return (<>
    <Header searchcard={searchcard}/>
    <main>
      <ul className="cards">
        {cards.map((card) => {
          return <ListingCard
            key={card.id}
            Id={card.id}
            Description={card.description}
            Image={card.image}
            Location={card.location}
            deleteItem={deleteItem}
          />
        })}
      </ul>
    </main>
    </>);
}

export default ListingsContainer;

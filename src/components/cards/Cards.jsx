import Card from "../card/Card";
import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCards(data))

    },[])
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                cards.map(card => <Card key={card.id} card = {card}/>)
            }
            
        </div>
    );
};

export default Cards;
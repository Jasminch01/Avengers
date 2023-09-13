import Card from "../card/Card";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";


const Cards = ({selectHandler}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCards(data))

    },[])
    return (
        <div className="grid grid-cols-2 gap-4 absolute left-20">
            {
                cards.map(card => <Card key={card.id} card = {card} selectHandler = {selectHandler}/>)
            }
            
        </div>
    );
};

Cards.proptypes = {
    selectHandler : PropTypes.func.isRequired
}

export default Cards;
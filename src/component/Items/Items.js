import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Items.css';

const Items = () => {
    const [food , setItems] = useState([]);
    useEffect(()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data.meals))
    },[])
    return (
        <div className='items'>
            {
                food.map(item =><Food meal={item} key={item.idMeal}></Food>)
            }
        </div>
    );
};

export default Items;
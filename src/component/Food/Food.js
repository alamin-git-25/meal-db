import React from 'react';
import './Food.css';

const Food = (props) => {
    const {strMeal,strMealThumb} = props.meal;
    console.log(props.meal);
    return (
        <div className='food-box'>  
            <img src={strMealThumb} alt="" />
            <hr />
            <h3>{strMeal}</h3>
        </div>
    );
};

export default Food;
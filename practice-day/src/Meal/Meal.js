import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb,idMeal } = props.meal;
    const navigate = useNavigate();
    const usingNavigate = () => {
    navigate(`/mymeal/${idMeal}`)
    }
    return (
        <div className='mt-10 text-center '>
            <img src={strMealThumb} className='w-full' alt="" />
            <h1>{strMeal}</h1>
            <p>{strInstructions.slice(0, 150)}</p>
            <button onClick={usingNavigate} className='border px-5 py-3 mt-4 hover:bg-amber-500 font-bold'>Meal Detail</button>
            <Link to={`/mymeal/${idMeal}`}>show Detail</Link>
        </div>
    );
};

export default Meal;
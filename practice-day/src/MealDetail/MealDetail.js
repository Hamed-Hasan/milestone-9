import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MealDetail = () => {
    const {id} = useParams();
    const [meal, setMeal] = useState({});
    console.log(meal)
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [id]);
    return (
        <div>
            <h2 className='font-bold mt-6 text-3xl'>this is meal detail ID {id}</h2>
            <div className='container mx-auto px-4 mt-6'>
                <div className='w-1/2 mx-auto'>
                <img src={meal.strMealThumb} className='w-full' alt="" />
                <h1 className='pt-6 text-3xl'>{meal.strArea}</h1>
                {/* <p>{meal.strInstructions.slice(0, 300)}</p> */}
                <button className='px-6 py-3 bg-lime-600 text-white mt-5 rounded'> <Link to='/'>Go To Home Page</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;
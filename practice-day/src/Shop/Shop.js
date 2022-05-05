import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Shop = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.meals === null){
              console.log('okkkkkkkk');
            }else{
                setMeals(data.meals)
            }
           
        })
    }, [searchText]);

    const searchFood = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <div>
            <input onChange={searchFood} type="text" name="search" id=""  placeholder="search" className="border mt-14 p-4 w-1/2"/>
            <h2 className="text-center mt-5 font-bold text-2xl">{meals.length}</h2>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-7">
         
       {/* {
           meals.length >= 0 && meals.map(meal => <Meal
            key={meal.idMeal}
            meal={meal}
            />)
       } */}
          {
                meals.map(meal => <Meal
                key={meal.idMeal}
                meal={meal}
                />)
            }
          </div>
        </div>
    );
};

export default Shop;
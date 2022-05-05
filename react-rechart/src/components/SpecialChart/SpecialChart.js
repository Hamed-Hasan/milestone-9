import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';


function isAdmin( user) {
    return (  user ? 'Admin' : 'Normal User');
   }
console.log(isAdmin(true));
const SpecialChart = () => {

 
    
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
       
       
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    }
                    return ph
                })
                setPhones(phoneData)
            })
    }, [])
    return (

      
        <div>



              <BarChart width={800} height={400} data={phones}>
        //     <Bar dataKey="value" fill="#8884d8" />
        //     <XAxis dataKey="name"></XAxis>
        //     <Tooltip />
        //     <YAxis></YAxis>
        </BarChart>
        </div>
      
    );
};

export default SpecialChart;

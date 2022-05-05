import React from 'react';
import {  CheckCircleIcon } from '@heroicons/react/solid'
const benefit = (props) => {
    return (

    
        <p className='flex items-center '>
        <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
        <span className='text-[16px] my-1 font-bold'>{props.benefit}</span>
    </p>

    );
};

export default benefit;
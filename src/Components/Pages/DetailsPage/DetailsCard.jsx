import React from 'react';

const DetailsCard = ({glass}) => {

    const { cover, title,description, price, category, rating } = glass;

    return (
    <div>
        <div className="mx-auto max-w-2xl p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        	<img src={cover} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        	<div className="mt-6 mb-2">
        		<span className="block text-xs font-medium tracking-widest uppercase dark:text-purple-600">{category} rating: {rating}</span>
        		<h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        	</div>
        	<p className="dark:text-gray-800">{description}</p>
        </div>
    </div>
    );
};

export default DetailsCard;
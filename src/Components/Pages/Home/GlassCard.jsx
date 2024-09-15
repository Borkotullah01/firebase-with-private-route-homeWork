import React from 'react';
import { Link } from 'react-router-dom';

const GlassCard = ({glass}) => {
    
    const { cover, title, id, price, category, rating } = glass;

    return (
        <div className="card mx-auto card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className='p-5'
            src={cover}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">{title} <span className="badge badge-accent badge-outline font-semibold">{rating}</span></h2>
          <p className="text-xl font-medium"><span className="text-info font-bold">Writer:</span> </p>
          <p className="text-sm font-medium"><span className="text-green-500 font-bold">Category:</span> {category}</p>
          <div className="card-actions">
            <button className="btn btn-primary btn-outline">USD: {price} $</button>
            <Link to={`/glass/${id}`} className="btn btn-info">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default GlassCard;
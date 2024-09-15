import React from 'react';
import HeroImg from "./../../../assets/HeroImg.jpg"
import Glasses from './Glasses';

const Home = () => {
    return (
    <div>
    <div className="hero bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={HeroImg}
            className="max-w-[300px] rounded-lg shadow-2xl" />
          <di>
            <h1 className="text-5xl font-bold">Sunglass Collection!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn text-base btn-primary">Get Started</button>
          </di>
        </div>
    </div>
    <Glasses></Glasses>
    </div>
    );
};

export default Home;
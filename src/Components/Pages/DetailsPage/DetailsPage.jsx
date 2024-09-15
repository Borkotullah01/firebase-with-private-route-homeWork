import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlassCard from '../Home/GlassCard';
import DetailsCard from './DetailsCard';

const DetailsPage = () => {


    const [glasses, setGlasses] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    // console.log(id);

    useEffect(()=>{
        fetch("/glasses.json")
        .then(res=>res.json())
        .then(data=>{
            setGlasses(data)
            setLoading(false)
        })
    },[])
    // console.log(glass);

    const  singleGlass =  glasses.find(aGlass=>aGlass.id == id);



    if (loading) {
        return <span className="loading loading-bars w-40"></span>
    }
    return <DetailsCard key={singleGlass.id} glass={singleGlass}></DetailsCard>
};

export default DetailsPage;
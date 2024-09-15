import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";

const Glasses = () => {

    const [glasses, setGlasses] = useState([])

    useEffect(()=>{
        fetch("glasses.json")
        .then(res=>res.json())
        .then(data=>setGlasses(data))
    },[])
    // console.log(glasses);

    return (
        <div className="grid m-5 gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                glasses.map(glass=><GlassCard key={glass.id} glass={glass}></GlassCard>)
            }
        </div>
    );
};

export default Glasses;
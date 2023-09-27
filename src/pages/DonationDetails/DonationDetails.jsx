import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {
    const [category,setCategory]=useState({})
    const {id} = useParams()


    const categories = useLoaderData()

    useEffect(()=>{
        const findCategory=categories?.find(category=>category.id===id)
        setCategory(findCategory)

    },[id,categories])
    return (
        <div>
<DonationDetailsCard category={category}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;
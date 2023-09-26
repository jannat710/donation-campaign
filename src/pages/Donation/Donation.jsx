import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation,setDonation]= useState([])
    const [noFound,setNoFound]=useState(false)
    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if(donationItem){
            setDonation(donationItem)
        }
        else{
            
            setNoFound('No Donation')
        }
    },[])
    return (
        <div>
            {
                noFound ? <p className="flex justify-center items-center">{noFound}</p> : <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {
                        donation.map(category=><DonationCard key={category.id} category={category}></DonationCard>)
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;
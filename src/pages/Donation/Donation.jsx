import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [seeAll, setSeeAll] = useState(false)
    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if (donationItem) {
            setDonation(donationItem)
        }
        else {

            setNoFound('No Donation')
        }
    }, [])
    const removeItem = () => {
        localStorage.clear()
        setDonation([])
        setNoFound('No Donation');
    }
    return (
        <div>
            {
                noFound ? <p className="flex justify-center items-center">{noFound}</p> : <div>
                    {donation.length > 0 && <button onClick={removeItem} className="px-4 py-2 rounded-md text-white normal-case bg-[#009444] block mx-auto ">Delete All</button>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        {
                            seeAll ? donation.map((category) => (<DonationCard key={category.id} category={category}></DonationCard>)) :
                                donation.slice(0, 4).map((category) => (<DonationCard key={category.id} category={category}></DonationCard>))
                            // donation.map((category)=>(<DonationCard key={category.id} category={category}></DonationCard>))
                        }
                    </div>
                    {
                        donation.length > 4 && (
                            <button onClick={() => setSeeAll(!seeAll)} className="px-4 py-2 rounded-md bg-[#009444] block mx-auto text-white normal-case" >{seeAll ? '' : "See All"}</button>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default Donation;
/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'

const DonationDetailsCard = ({ category }) => {
    const { id, picture, title, text_color_and_button_bg, description, price } = category || {}
    const buttonStyle = {
        backgroundColor: text_color_and_button_bg,
    };

    const buttonClick = () => {
        const addDonation = [];
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if (!donationItem) {
            addDonation.push(category)
            localStorage.setItem('donation', JSON.stringify(addDonation))
            Swal.fire(
                'Good job!',
                'Successfully Donated!',
                'success'
            )
        }
        else {
            const isExists = donationItem.find(category => category.id === id)
            if (!isExists) {
                addDonation.push(...donationItem, category)
                localStorage.setItem('donation', JSON.stringify(addDonation))
                Swal.fire(
                    'Good job!',
                    'Successfully Donated!',
                    'success'
                )
            }
            else {
                Swal.fire(
                    'Error!',
                    'Already Added'
                )
            }

        }
    };
    return (
        <div>
            <div className=" p-2">
                <div className="relative">
                    <img className="w-full h-[65vh]" src={picture} alt="" />
                    <div className="absolute bottom-0 left-0  p-3 bg-[#00000080] text-left w-full mx-auto">
                        <div className="bg-transparent ">
                            <button className="btn text-white normal-case border-none " style={buttonStyle} onClick={buttonClick}>Donate {price}</button>
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl font-bold py-5">{title}</h1>
                <p className="text-base font-normal text-[#0b0b0bb3]">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetailsCard;
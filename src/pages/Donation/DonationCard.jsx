

const DonationCard = ({ category }) => {
    const { id, picture, title, category_name, category_bg, text_color_and_button_bg, card_bg, price } = category || {}
    const cardStyle = {
        backgroundColor: card_bg,
        color: text_color_and_button_bg,
    };
    const buttonStyle = {
        backgroundColor: category_bg,
    };
    const viewDetails = {
        backgroundColor: text_color_and_button_bg,
    };
    return (
        <div className="py-10">
            <div className="rounded-lg flex justify-center items-center bg-base-100 shadow-xl w-full mx-auto h-72" style={cardStyle}>
                <figure className=''>
                    <img className='h-72 w-64' src={picture} alt="" />
                </figure>
                <div className="card-body justify-start items-start">
                    <button className="rounded-md text-sm font-medium py-1 px-2" style={buttonStyle}>{category_name}</button>
                    <h2 className="text-xl font-semibold py-2" >{title}</h2>
                    <p>{price}</p>
                    <button className="btn text-white normal-case" style={viewDetails}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;


const CategoriesCard = ({category}) => {

const {id,picture,title,category_name,category_bg,text_color_and_button_bg,card_bg}=category || {}
const cardStyle={
backgroundColor :card_bg,
color:text_color_and_button_bg,
};
const buttonStyle={
backgroundColor :category_bg,
};


    return (
        <div className="p-5 md:p-10 lg:p-0">
            <div className=" w-full mx-auto bg-base-100 shadow-xl " style={cardStyle}>
                <figure className="pb-5">
                    <img  src={picture} className="w-full mx-auto" />
                </figure>
                <div className=" text-left py-2 px-2">
                    <button className="rounded-md text-sm font-medium py-1 px-2" style={buttonStyle}>{category_name}</button>
                    <h2 className="text-xl font-semibold py-2">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;
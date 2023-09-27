/* eslint-disable react/prop-types */
import CategoriesCard from "./CategoriesCard";


const Categories = ({ categories }) => {
    console.log(categories)

    return (
        <div className="">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                {
                    categories?.map(category => <CategoriesCard key={category.id} category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;
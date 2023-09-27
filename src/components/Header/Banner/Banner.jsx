/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Banner = ({ categories }) => {
    const [categoryName, setCategoryName] = useState('');
    console.log(categories)
    const { id, picture, title, category_name, category_bg, text_color_and_button_bg, card_bg } = categories || {}

    const handleInputChange = (e) => {
        setCategoryName(e.target.value);
        console.log(e.target.value)
    };
    return (
        <div className="">
            <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?w=1060&t=st=1695635693~exp=1695636293~hmac=01a282bee274decb93ad0d9cf26f0b36d54ca40368970ec89cf9f58deeb5a8bb)' }}>
                <div className="hero-overlay " style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="text-black mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="w-full">
                            <label className="input-group flex justify-center items-center ">
                                <input type="text" placeholder="Search here...." className="input input-bordered " value={categoryName} onChange={handleInputChange} />
                                <button className="btn text-white normal-case bg-[#FF444A]">Search</button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function ScrollCard() {
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 0.75
    };

    return (
        <Slider {...settings}>
            <div className='slider_card'>
                <div className="slidercard1">
                    <div className="car1icon">
                        <HiOutlineNewspaper id='newsicon' />
                    </div>
                    <div className="card1content">
                        <h6>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                    </div>
                </div>
            </div>
            <div className='slider_card'>
                <div className="slidercard2  ">
                    <div className="card2icon ">
                        <FaArrowTrendUp id='arrowicon' />
                    </div>
                    <div className="card2content">
                        <h6>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

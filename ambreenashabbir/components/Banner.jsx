"use client";
// components/HeroSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// install Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroSlider = () => {
    const slides = [
        {
            image: 'https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg',
            title: 'Product 1',
            description: 'This is the first product description',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/12/27/21/11/beach-1110498_1280.jpg',
            title: 'Product 2',
            description: 'This is the second product description',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2021/10/06/22/56/boat-6686809_1280.jpg',
            title: 'Product 3',
            description: 'This is the third product description',
        },
    ];

    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative h-screen">
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-32">
                            <div className="text-white max-w-lg">
                                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                                <p className="text-lg mb-6">{slide.description}</p>
                                <div>
                                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">
                                        Shop Now
                                    </button>
                                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSlider;

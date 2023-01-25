import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import './Gallery.scss';

const fotos = [
    {
        img: "./imgs/item1.svg",
        alt: 'Item 1',
    },
    {
        img: "./imgs/item2.svg",
        alt: 'Item 2',
    },
    {
        img: "./imgs/item3.svg",
        alt: 'Item 3',
    },
    {
        img: "./imgs/item4.svg",
        alt: 'Item 4',
    },
];




export const Gallery = () => {
    const [isDesktop, setIsDesktop] = useState(null);


    useEffect(() => {
        function handlerResize() {
            setIsDesktop(document.documentElement.clientWidth >= 360);
            console.log(document.documentElement.clientWidth)
            console.log(isDesktop)
        }

        window.addEventListener('resize', handlerResize)

        setIsDesktop(document.documentElement.clientWidth > 360);

        return () => {
            window.removeEventListener('resize', handlerResize)
        }
    }, []);

    if (isDesktop === null) {
        return <div></div>
    }

    if (!isDesktop) {
        return (
            <div className="Gallery">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                >
                    {fotos.map(item => (

                        <SwiperSlide key={item.img}>
                            <img src={item.img} alt={item.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }

    return (
        <div className="Gallery">
            {fotos.map(item => (
                <img
                    key={item.img}
                    src={item.img}
                    alt={item.alt}
                    className="Gallery__item"
                />
            ))}
        </div>
    )
};
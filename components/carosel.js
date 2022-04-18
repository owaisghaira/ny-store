import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';


function CarouselSlid({ banners }) {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setWidth(document.body.clientWidth)
        setHeight(document.body.clientHeight)
    }, [])

    return (
        <Carousel autoplay>
            {
                banners.map((banner, index) => {
                    return (
                        <div key={'banner-' + index} >
                            <Image src={banner.url} height={width/2} width={width} />
                        </div>
                    );
                })
            }

        </Carousel>
    )
}

export default CarouselSlid;
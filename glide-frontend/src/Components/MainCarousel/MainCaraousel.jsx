import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItems/CarouselItem';

const MainCarousel = (props) => {

    return (
        <div className="main-carousel">
            <Carousel
                navButtonsAlwaysVisible={true}
            >
                {
                    props.items.map((item, i) => <CarouselItem key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

export default MainCarousel;
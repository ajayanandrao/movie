import React, { Fragment } from 'react'
import Flickity from 'react-flickity-component'
import { Link } from 'react-router-dom';
import './Carousel.scss';
import imgList from './Pages/Movies/movi json/imgList.json';


export const carouselList = imgList.map((CarsoulList) => (
    <Fragment key={CarsoulList.id}>

        <div className="sliderBoxes">
            <div className="margin">
                <div>
                    <Link to={CarsoulList.imgRout}>
                        <img className='cimg' src={CarsoulList.Cimg} />
                    </Link>
                </div>
            </div>
        </div>


    </Fragment>
))

const Carousel = () => {

    var flickityOptions = {
        initialIndex: 2,
        cellSelector: '.sliderBoxes',
        accessibility: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: 1000
    }
    return (
        <>

            <Flickity
                className={'carouse'}
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={false}>

                {carouselList}
            </Flickity>
        </>
    )
}

export default Carousel


{/* <div className="sliderBoxes">
                    <div className="margin">
                        <div className="f" style={{
                            backgroundImage:
                                `url("https://myimg.bid/images/2022/09/08/Thor-2022-English-HDRip-Full-Movie.jpg  ")`
                        }} />
                    </div>
                </div>
                <div className="sliderBoxes">
                    <div className="margin">
                        <div className="f" style={{
                            backgroundImage:
                                `url("https://myimg.bid/images/2022/09/08/Thor-2022-English-HDRip-Full-Movie.jpg  ")`
                        }} />
                    </div>
                </div>
                <div className="sliderBoxes">
                    <div className="margin">
                        <div className="f" style={{
                            backgroundImage:
                                `url("https://myimg.bid/images/2022/09/08/Thor-2022-English-HDRip-Full-Movie.jpg  ")`
                        }} />
                    </div>
                </div>

                <div className="sliderBoxes">
                    <div className="margin">
                        <div className="f" style={{
                            backgroundImage:
                                `url("https://myimg.bid/images/2022/09/08/Thor-2022-English-HDRip-Full-Movie.jpg  ")`
                        }} />
                    </div>
                </div>
                <div className="sliderBoxes">
                    <div className="margin">
                        <div className="f" style={{
                            backgroundImage:
                                `url("https://myimg.bid/images/2022/09/08/Thor-2022-English-HDRip-Full-Movie.jpg  ")`
                        }} />
                    </div>
                </div>
                <div className="sliderBoxes">
                    <div className="margin">
                        <div className="f" style={{
                            backgroundImage:
                                `url("https://myimg.bid/images/2022/09/08/Thor-2022-English-HDRip-Full-Movie.jpg  ")`
                        }} />
                    </div>
                </div> */}
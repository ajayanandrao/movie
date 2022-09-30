import React, { Fragment } from 'react'
import './innerMoviePage.scss';
import InnerMovieTow from './InnerMovieTow';
import MovieJson from './Fifth.json';

export const ScreenShop = MovieJson.map((movie) => (
    <Fragment key={movie.id}>
        <div className="flexx">
            <img className="screenshot-size" src={movie.screen1} alt="" />
            <img className="screenshot-size" src={movie.screen2} alt="" />
            <img className="screenshot-size" src={movie.screen3} alt="" />
            <img className="screenshot-size" src={movie.screen4} alt="" />
        </div>
    </Fragment>
));


const InnerMovie = (props) => {
    return (
        <>
            <div className="container py-3" style={{ backgroundColor: "#212121" }}>
                <div className="container MoviePageDescription">
                    <h5> <i className="fa-solid fa-clapperboard me-2"></i> {props.MoviePageDescription}</h5>
                </div>

                <div className="container MoviePageDescription-Two my-5">

                    <div className=" MoviePageDescription d-flex flex-column ">
                        <div className="innerDescription">
                            <h5> <i className="fa-solid fa-clapperboard mt-4 me-2"></i> {props.MoviePageDescription}</h5>
                        </div>

                        <img className='MoviePageImg mt-4' src="https://myimg.bid/images/2022/03/22/w3qa274gvca9t8pkUoG8nfQgTU3.jpg" />
                        <h4 className='how-to-d mt-4'>How To Downlaod ?</h4>


                    </div>
                    <hr className='hr' />
                    <div className="MoviePageDescription-all">
                        <h4 >{props.movieTitle}</h4>
                        iMDb Rating: 6.6/10
                        <div className="movies-detail-sec">
                            Genre:<span className="language"> {props.type}</span>
                            <br />
                            Stars:<span className="language"> Sam Corlett, Frida Gustavsson, Leo Suter</span>
                            <br />
                            Language:<span className="language"> {props.language}</span>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div className="iframe-div">
                        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/n6BVyk7hty8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <hr className='hr' />
                    <h3 className='screenShot-text m-2'>: Screen-Shots :</h3>
                    <div className="screenshot-img my-4">
                        <div className="grid-screenshot">
                            {ScreenShop}
                        </div>
                    </div>

                    <InnerMovieTow/>

                </div>
                <div className="container">
                    <hr className='hr' />
                    <div className="discuss">
                        <h4 style={{ color: "#E69999", textAlign: "center" }}>: Discuss :</h4>
                    </div>
                    <div className="comment-sec">

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="enter the name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary">Submit</button>

                    </div>
                    <hr className='hr' />
                </div>
            </div>
            <footer className="text-center text-sm-start text-white footer mt-5">
                <div className="text-center p-3">
                    Copyright © 2020 :
                    <a className="text-white" href="https://mdbootstrap.com/">Ajay Anandrao. All rights reserved.</a>
                </div>
            </footer>
        </>
    )
}

export default InnerMovie
import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = (props) => {
    return (
        <>
 <Link to={props.route}> 
            <div className="MovieCard-Container">
                <div className="outer-one">
                    <div className="MovieCard-outer-one">
                        <div className="MovieCard-outer-two">
                            {/* <a href="./webseries/vikings.html"> */}
                                <img className="outer-card-two-img" src={props.img} alt="" />
                            {/* </a> */}
                        </div>
                    </div>

                    <div className="MovieCart-Text">
                        <span className='MovieCard-Text-Color'>
                            <h4 style={{fontSize:"23px"}}>{props.title} (Season 6)</h4>
                            {props.description}
                        </span>
                    </div>

                </div>
            </div>
            </Link>
            
        </>
    )
}

export default MovieCard
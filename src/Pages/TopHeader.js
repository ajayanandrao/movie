import React, { Fragment } from 'react'
import './TopHeader.scss';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import list from './Movies/movi json/movie.json';
import Carousel from '../Carousel';



const TopHeader = () => {


    return (

        <>
        <Carousel/>
            <div className="Nav-Category">
                <div className="Nav-Category-Title-One">
                    <span className='movieText-Color'>Movies</span>
                </div>
                
                <div className="Nav-Category-Title-One">
                    <span className='movieText-Color'>Web Series</span>
                </div>
            </div>
            
            {/* ------------------------------------- */}


            <div className='center'>
                <div className='container-grid'>
                {
        list.map((data_One)=>(
            <Fragment key={data_One.id}>
            
                <MovieCard 
                    route={data_One.mrout} 
                    title={data_One.name}
                    img={data_One.img}
                    description={data_One.description}>
                </MovieCard>
        
        </Fragment>
        ))
    }
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

export default TopHeader






// {
//     listTwo.map((item) => (
//        <Fragment key={item.id}>
                                     
//                {
//                  listTwo.screenshots &&  listTwo.screenshots.map((l)=>(
//                    console.log(l.user)
//                    ))
//                }

//                <MovieCard route={item.mrout} title={item.name}
//                    img={item.img}
//                    description={item.description} />
               
        
//        </Fragment>
//    ))
// }
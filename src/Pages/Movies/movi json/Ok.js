import React, { Fragment } from 'react'
import list from './movie.json';

const Ok = () => {
  return (
    <>
    {
        list.map((data_One)=>(
            <Fragment key={data_One.id}>
            
            
             <p >{data_One.name}</p>

             {data_One.screenshots && data_One.screenshots.map((olist)=>(
                <h1>{olist.user}</h1>
             ))}
 
            
        
        </Fragment>
        ))
    }
    </>
  )
}

export default Ok
import React from 'react'
import img3 from "./Image/image 12.jpg"
import star from "./Image/Star 1.jpg"
import data from "./data.js";

const Card = () => {
  return (
    <div className='card-wrapper'>
        
        {data.map((item, i)=>{
            return(
            <div key={i} className="card" >
                { item.openSport === 0 && <div className='card-badge'>SOLD OUT</div>}
                {/* {item.location === "US" && <div className='card-badge'>ONLINE</div>} */}
                
            <img src={item.coverImg} alt="" className='card-image' />
            

             <div className='card-stats'>
            <span>{item.stats.rating}</span>
            <span className='gray'>({item.stats.reviewCount})</span>
            <span className='gray-location'>.{item.location}</span>
             </div> 

            <p className='title'>{item.title}</p>
            <p><span className='bold'> ${item.price}</span> / person</p>
            

        </div>
            )
        
        })}
    </div> 
    
)  
}

export default Card